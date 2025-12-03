
import React from 'react'
export default function Section({id,title,children}){
 return(
  <section id={id} className="py-16 border-b">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-semibold mb-8">{title}</h2>
      {children}
    </div>
  </section>
 )
}
