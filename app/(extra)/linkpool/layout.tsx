// import React from "react"

// export default function PageLayout({children}: {
//     children: React.ReactNode
// }) {
//     return (
//         <div className="bg-[#0E0C15]">
//             {children}
//         </div>
//     )
// }

import React from "react"

export default function PageLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <div className="bg-white dark:bg-[#0E0C15]">
            {children}
        </div>
    )
}