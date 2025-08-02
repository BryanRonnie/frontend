import type { ReactNode } from "react";
import { H1 } from "../custom/H1";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux";

/* 
############################################### 
#  Title                                      #
###############################################
#  Content ---->                              #
#                                             #
#                                             #
#                                             #
############################################### 
*/

const PageLayout1 = ({ title, content }: { title: ReactNode; content: ReactNode }) => {
  const theme = useSelector((state: RootState) => state.appPreferences.theme);
  
  return (
  <div
    style={{
      display: 'grid',
      gridTemplateRows: 'auto 1fr', // `auto` for header, `1fr` for scrollable content
      height: '100vh - 60px',
    }}
  >
    <div style={{ padding: '20px', backgroundColor: theme === "light" ? "#fff" : "#231e37", color: theme === "light" ? "#000" : "#fff" }}>
      <H1>{title}</H1>
    </div> 

    <div
      style={{
        padding: '20px',
        overflowY: 'auto', // or 'scroll' if you always want scrollbar
      }}
    >
      {content}
    </div>
  </div>
)}

export default PageLayout1;
