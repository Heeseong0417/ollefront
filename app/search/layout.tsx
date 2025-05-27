import Image from 'next/image';
import search from "@/assets/icons/search.png"
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    
    return (

      
       <>
             
     

     
        
           {children}
     
          
      </>
      
        
     
     
       
  
    );
  }
  