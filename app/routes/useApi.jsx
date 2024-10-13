import { useAuth0 } from '@auth0/auth0-react';
import { SignJWT } from 'jose';
import { useRef } from 'react';

const secretKey = new TextEncoder().encode('-KJGzSyN_xPJFu058EIb-fTvEkFCna1QLdbERahXMMxKRJprkB4ig31ZL8klEWJl');

export default function useApi() {
    const { user } = useAuth0();
    const tokenRef = useRef(null);

    // Generate JWT token only once
    if (!tokenRef.current) {
        new SignJWT({ email: user?.email || "email@email.com" })
            .setProtectedHeader({ alg: 'HS256' })
            .setIssuedAt()
            .setExpirationTime('2h')
            .sign(secretKey)
            .then(token => {
                tokenRef.current = token;
            })
            .catch(err => console.error("Token generation error: ", err));
    }

    // Helper function to create headers with Authorization
    const getHeaders = () => ({
        'Authorization': 'Bearer ' + tokenRef.current
    });

    // API methods as before
    const setDailyGoal = async ({ protein, carbs, fats, calories }) => {
        const url = "https://3pndzfcvne.us-east-1.awsapprunner.com/nutrition/dailyGoal";
        const dailyGoal = { protein: String(protein), carbs: String(carbs), fats: String(fats), calories: String(calories) };
        try {
            const response = await fetch(url, { method: 'POST', headers: getHeaders(), body: JSON.stringify(dailyGoal) });
            if (!response.ok) throw new Error(`Failed to set daily goal: ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error(error.message);
        }
    };

    const getDailyGoal = async () => {
        const url = "https://3pndzfcvne.us-east-1.awsapprunner.com/nutrition/dailyGoal";
        try {
            const response = await fetch(url, { method: 'GET', headers: getHeaders() });
            if (!response.ok) throw new Error(`Failed to get daily goal: ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error(error.message);
        }
    };

    const getPreferences = async () => {
        const url = "https://3pndzfcvne.us-east-1.awsapprunner.com/preferences";
        try {
            const response = await fetch(url, { method: 'GET', headers: getHeaders() });
            if (!response.ok) throw new Error(`Failed to get preferences: ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error(error.message);
        }
    };

    const setPreferences = async ({ diet, intolerances }) => {
        const url = "https://3pndzfcvne.us-east-1.awsapprunner.com/preferences";
        const preferences = { diet, intolerances: intolerances.join(',') };
        try {
            const response = await fetch(url, { method: 'POST', headers: getHeaders(), body: JSON.stringify(preferences) });
            if (!response.ok) throw new Error(`Failed to set preferences: ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error(error.message);
        }
    };

    const getRecipes = async (diet, intolerances) => {
        const url = "https://3pndzfcvne.us-east-1.awsapprunner.com/recipes";
        const urlParams = new URLSearchParams({ diet, intolerances: intolerances.join(',') });
        try {
            const response = await fetch(`${url}?${urlParams}`, { method: 'GET', headers: getHeaders() });
            if (!response.ok) throw new Error(`Response status: ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error(error.message);
        }
    };

    return {
        setDailyGoal,
        getDailyGoal,
        getPreferences,
        setPreferences,
        getRecipes
    };
}