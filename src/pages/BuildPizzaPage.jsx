// import React from 'react';
// import IngredientList from '../components/builder/IngredientList';
// import BuildButton from '../components/builder/BuildButton';

// /**
//  * BuildPizzaPage - Custom pizza builder
//  */
// const BuildPizzaPage = () => {
//   return (
//     <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
//       <div className="w-full max-w-5xl">
//         <div className="bg-white rounded-3xl shadow-lg p-6 md:p-10">
//           <IngredientList />

//           <div className="flex justify-center mt-8">
//             <BuildButton />
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default BuildPizzaPage;
import React from 'react';
import IngredientList from '../components/builder/IngredientList';
import BuildButton from '../components/builder/BuildButton';

/**
 * BuildPizzaPage - Custom pizza builder
 */
const BuildPizzaPage = () => {
  return (
    <main className=" bg-gray-50 flex items-center justify-center px-4 py-8">
      <div className="">
        <div className="bg-white rounded-3xl ">
          <IngredientList />

          <div className="flex justify-center mt-8">
            <BuildButton />
          </div>
        </div>
      </div>
    </main>
  );
};

export default BuildPizzaPage;