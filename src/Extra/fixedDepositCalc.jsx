// import { useState } from "react";

// interface CalculationResult {
//   interest: number;
//   tax: number;
//   maturityAmount: number;
// }

// const FixedDepositCalculator: React.FC = () => {
//   const [principal, setPrincipal] = useState<number | "">("");
//   const [tenor, setTenor] = useState<number | "">("");
//   const [rate, setRate] = useState<number | "">("");
//   const [result, setResult] = useState<CalculationResult | null>(null);

//   const calculateFD = () => {
//     if (!principal || !tenor || !rate) {
//       alert("Please enter valid numbers!");
//       return;
//     }

//     const P = Number(principal);
//     const T = Number(tenor);
//     const R = Number(rate);
//     const TAX_RATE = 10; // 10% tax on interest

//     // Interest Calculation
//     const interest = (P * R * T) / (100 * 365);

//     // Tax Deduction
//     const tax = (TAX_RATE / 100) * interest;

//     // Final Maturity Amount
//     const maturityAmount = P + (interest - tax);

//     setResult({ interest, tax, maturityAmount });
//   };

//   return (
//     <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
//       <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center mb-4">
//           Fixed Deposit Calculator
//         </h2>

//         <div className="mb-4">
//           <label className="block text-gray-700">Principal Amount (₦):</label>
//           <input
//             type="number"
//             className="w-full p-2 border rounded-lg"
//             value={principal}
//             onChange={(e) => setPrincipal(e.target.value ? Number(e.target.value) : "")}
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700">Tenor (Days):</label>
//           <input
//             type="number"
//             className="w-full p-2 border rounded-lg"
//             value={tenor}
//             onChange={(e) => setTenor(e.target.value ? Number(e.target.value) : "")}
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700">Interest Rate (% per year):</label>
//           <input
//             type="number"
//             className="w-full p-2 border rounded-lg"
//             value={rate}
//             onChange={(e) => setRate(e.target.value ? Number(e.target.value) : "")}
//           />
//         </div>

//         <button
//           className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700"
//           onClick={calculateFD}
//         >
//           Calculate
//         </button>

//         {result && (
//           <div className="mt-6 p-4 bg-green-100 rounded-lg">
//             <p>
//               <strong>Interest Earned:</strong> ₦{result.interest.toFixed(2)}
//             </p>
//             <p>
//               <strong>Tax Deducted (10%):</strong> ₦{result.tax.toFixed(2)}
//             </p>
//             <p className="text-xl font-bold">
//               <strong>Final Maturity Amount:</strong> ₦{result.maturityAmount.toFixed(2)}
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FixedDepositCalculator;


// Zarahabubakar1234@gmail.com,
// kevohmutugi51@gmail.com,
// abrahammicheal55@yahoo.com,
// nimrodmisiani42@gmail.com,
// "A. J. Akinyele" <biola.akinyele@gmail.com>,
// mayowa.u.sunusi@gmail.com,
// ogunkoyamayowa77@gmail.com,
// ene.henry.eh@gmail.com,
// cleverakanimoh02@gmail.com,
// toheeb.olawale.to23@gmail.com,
// omitogunsherifat75@gmail.com,
// husseinimudiking@gmail.com,
// faruqhameed1@gmail.com,
// sitangwesa6@gmail.com,
// opeyemiakinwumi14@gmail.com,
// ifeanyi.okagbue@gmail.com,
// ibrahimainge@gmail.com,
// Ozougwu971@gmail.com,
// mridulsharma06@gmail.com,
// mcbassboy247@gmail.com,
// osoidaghemarvel@gmail.com,
// lightdiamonds401@gmail.com,
// olawaleb5484@gmail.com,
// olatundesodiq@gmail.com,
// kikkyal@gmail.com,
// abdulkadirshuaib4real@gmail.com,
// adisa.khalid225@gmail.com,
// raffysul1@gmail.com,
// nseekabit@gmail.com,
// ojoshinajohnson@gmail.com,
// uabdulquadri@gmail.com,
// adsdesigntech@gmail.com,
// ikezuby2012@gmail.com,
// ulc59fx2@gmail.com,
// prptamarachi@gmail.com,
// omoiguipromise02@gmail.com,
// oguchemaureenm@gmail.com,
// victorgilbert63@gmail.com,
// aov.nathan@gmail.com,
// jamesuchennachi@gmail.com,
// telladesina100@gmail.com,
// okoronkwomarvelous@hotmail.com,
// easyrilwan@gmail.com,
// moshoodmosruroh@gmail.com,
// nwakachibueze@gmail.com,
// chukwuogorchinwe@gmail.com,
// musa.yazid49@gmail.com,
// sammykingx.tech@gmail.com,
// emmadeyemo5@gmail.com,
// ezeugenyionyinye@gmail.com,
// tubosunbiz@gmail.com,
// olise.omoruyi@gmail.com,
// Georgeudonte@gmail.com,
// freeonjeyson@gmail.com,
// Adegbijilanre@gmail.com,
// abdullahisuraj911@gmail.com,
// joshuaoyewole20@gmail.com,
// adelabu.aderonke9638@gmail.com,
// olasunkanmiidris15@gmail.com,
// hashimabdulmujib@gmail.com,
// justicecharles497@gmail.com,
// nandilamul@gmail.com,
// jamesadeniji001@gmail.com,
// etino5481@gmail.com,
// samuelldmj5@gmail.co,
// henryugochukwuagu@gmail.com,
// aghahowaj01@gmail.com,
// oyatmicah@gmail.com,
// folad2012@gmail.com,
// stino4real33@gmail.com,
// fregzythomas@gmail.com,
// joshuaifeanyi67@gmail.com,
// muiliquazeem@gmail.com,
// alphonse.brand@gmail.com,
// mubbyre6xx@gmail.com,
// oshindeinde@gmail.com,
// maycoke4real@gmail.com,
// barkajames86@gmail.com,
// nwekechidimma88@gmail.com,
// adeniyimayowa21@gmail.com,
// chuksdsilent@gmail.com,
// atodoruth@gmail.com,
// donibris@gmail.com,
// olawaleawanat@gmail.com,
// okatamelody@gmail.com