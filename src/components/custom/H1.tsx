import type { ReactNode } from "react"

export const H1 = ({children} : {children: ReactNode}) => {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
      {children}
    </h1>
  )
}