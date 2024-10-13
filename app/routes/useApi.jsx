
import { useAuth0 } from '@auth0/auth0-react';
import { SignJWT } from 'jose';
import { useRef } from 'react';

const secretKey = new TextEncoder().encode('-KJGzSyN_xPJFu058EIb-fTvEkFCna1QLdbERahXMMxKRJprkB4ig31ZL8klEWJl');

export default async function useApi() {
    const {user} = useAuth0();
    const tokenRef = useRef();

    tokenRef.current = await new SignJWT({email: "email@email.com"})
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('2h')
      .sign(secretKey); 
    
    console.log(tokenRef.current)
    async function getRecepies() {
    const url = "https://3pndzfcvne.us-east-1.awsapprunner.com/recipes";
    try {
        const header = {'Authorization': 'Bearer ' + tokenRef.current}
        const url_params = {'diet': 'vegan', 'intolerances': 'peanut,soy,egg'}
        const response = await fetch(url);
        if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error(error.message);
    }
    }

    return {}
}