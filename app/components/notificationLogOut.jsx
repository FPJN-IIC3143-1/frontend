
export default function NotificationLogOut() {

  return(
    <div className="container bg-[#182F40] flex flex-row justify-center items-center w-[310px] h-[64px] "
      style={{ width: 310, height: 64, backgroundColor: "#182F40" }}  
    >
      <div className="vertLine w-[5px] h-[50px] border-l-white border-l-solid border-l-4"/>
      <img src="../../public/NotificationLogOut/notifications.png" 
        alt="notification" 
        className="w-[50px] h-[50px] pt-[7px] pb-[7px]"
      />
      <img src="../../public/NotificationLogOut/logout.png" 
        alt="logOut" 
        className="w-[50px] h-[50px] pt-[7px] pb-[7px]"
      />
      <div className="vertLine w-[5px] h-[50px] border-r-white border-r-solid border-r-4"/>
    </div>
  )
}