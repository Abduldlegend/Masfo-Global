// import { motion } from 'framer-motion'

// const partners = [
//     { name: 'Binance', logo: 'https://cryptologos.cc/logos/binance-coin-bnb-logo.png' },
//     { name: 'Ethereum', logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png' },
//     { name: 'Polygon', logo: 'https://cryptologos.cc/logos/polygon-matic-logo.png' },
//     { name: 'Chainlink', logo: 'https://cryptologos.cc/logos/chainlink-link-logo.png' },
//     { name: 'Solana', logo: 'https://cryptologos.cc/logos/solana-sol-logo.png' },
//     { name: 'Avalanche', logo: 'https://cryptologos.cc/logos/avalanche-avax-logo.png' },
// ]

// export const Partners = () => {
//     return (
//         <section className="py-16 bg-gray-50">
//             <div className="container-custom">
//                 <div className="text-center mb-10">
//                     <p className="text-gray-500 uppercase tracking-wide font-semibold">
//                         Trusted By Leading Blockchain Companies
//                     </p>
//                 </div>

//                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
//                     {partners.map((partner, index) => (
//                         <motion.div
//                             key={index}
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ delay: index * 0.1 }}
//                             className="flex justify-center"
//                         >
//                             <img
//                                 src={partner.logo}
//                                 alt={partner.name}
//                                 className="h-12 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
//                             />
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     )
// }


// Remove the import line completely
// import { motion } from 'framer-motion'

const partners = [
    { name: 'Binance', logo: 'https://cryptologos.cc/logos/binance-coin-bnb-logo.png' },
    { name: 'Ethereum', logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png' },
    { name: 'Polygon', logo: 'https://cryptologos.cc/logos/polygon-matic-logo.png' },
    { name: 'Chainlink', logo: 'https://cryptologos.cc/logos/chainlink-link-logo.png' },
    { name: 'Solana', logo: 'https://cryptologos.cc/logos/solana-sol-logo.png' },
    { name: 'Avalanche', logo: 'https://cryptologos.cc/logos/avalanche-avax-logo.png' },
]

export const Partners = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-10">
          <p className="text-gray-500 uppercase tracking-wide font-semibold">
            Trusted By Leading Blockchain Companies
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex justify-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="h-12 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}