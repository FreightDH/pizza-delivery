import type { ReactElement } from 'react';
import { ReactRouterProvider } from './provider';

export const App = (): ReactElement => <ReactRouterProvider />;

// const App = (): ReactElement => {
//   return (
//     <>
//       <main className={cl.page}>
//         <div className="page__container">
//           <div className={cl.page__body}></div>
//         </div>
//       </main>
//     </>
//   );
// };

// export default App;
