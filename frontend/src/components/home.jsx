// import React from 'react';
// import './home.css';

// const Home = () => {
//   return (
//     <div className="home">
//       <section className="features">
//         <div className="container">
//           <div className="features-grid">
//             <div className="feature-card">
//               <div className="feature-icon">🚀</div>
//               <h3>Bill Generate</h3>
//               <p>Built with modern technologies for optimal performance</p>
//             </div>
//             <div className="feature-card">
//               <div className="feature-icon">💡</div>
//               <h3>Sales</h3>
//               <p>Easy to use interface designed with users in mind</p>
//             </div>
//             <div className="feature-card">
//               <div className="feature-icon">🔒</div>
//               <h3>Add Stock</h3>
//               <p>Your data is protected with industry-standard security</p>
//             </div>
//             <div className="feature-card">
//               <div className="feature-icon">🚀</div>
//               <h3>Stock Purchased</h3>
//               <p>Built with modern technologies for optimal performance</p>
//             </div>
//             <div className="feature-card">
//               <div className="feature-icon">💡</div>
//               <h3>Labour salary</h3>
//               <p>Easy to use interface designed with users in mind</p>
//             </div>
//             {/* <div className="feature-card">
//               <div className="feature-icon">🔒</div>
//               <h3>Secure</h3>
//               <p>Your data is protected with industry-standard security</p>
//             </div> */}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './home.css';

// const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="home">
//       <section className="features">
//         <div className="container">
//           <div className="features-grid">
            
//             <div 
//               className="feature-card" 
//               onClick={() => navigate('/bill-generate')}
//               style={{ cursor: 'pointer' }}
//             >
//               <div className="feature-icon">🚀</div>
//               <h3>Bill Generate</h3>
//               <p>Built with modern technologies for optimal performance</p>
//             </div>

//             <div 
//               className="feature-card"
//               onClick={() => navigate('/sales')}
//               style={{ cursor: 'pointer' }}
//             >
//               <div className="feature-icon">💡</div>
//               <h3>Sales</h3>
//               <p>Easy to use interface designed with users in mind</p>
//             </div>

//             <div 
//               className="feature-card"
//               onClick={() => navigate('/add-stock')}
//               style={{ cursor: 'pointer' }}
//             >
//               <div className="feature-icon">🔒</div>
//               <h3>Add Stock</h3>
//               <p>Your data is protected with industry-standard security</p>
//             </div>

//             <div 
//               className="feature-card"
//               onClick={() => navigate('/stock-purchased')}
//               style={{ cursor: 'pointer' }}
//             >
//               <div className="feature-icon">🚀</div>
//               <h3>Stock Purchased</h3>
//               <p>Built with modern technologies for optimal performance</p>
//             </div>

//             <div 
//               className="feature-card"
//               onClick={() => navigate('/labour-salary')}
//               style={{ cursor: 'pointer' }}
//             >
//               <div className="feature-icon">💡</div>
//               <h3>Labour salary</h3>
//               <p>Easy to use interface designed with users in mind</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <section className="features">
        <div className="container">
          <div className="features-grid">
            
            <div 
              className="feature-card" 
              onClick={() => navigate('/bill-generate')}
              style={{ cursor: 'pointer' }}
            >
              <div className="feature-icon">📄</div>
              <h3>Bill Generate</h3>
              <p>Generate professional invoices and bills for your customers</p>
            </div>

            <div 
              className="feature-card"
              onClick={() => navigate('/sales')}
              style={{ cursor: 'pointer' }}
            >
              <div className="feature-icon">💰</div>
              <h3>Sales</h3>
              <p>Track and manage all your sales transactions efficiently</p>
            </div>

            <div 
              className="feature-card"
              onClick={() => navigate('/add-stock')}
              style={{ cursor: 'pointer' }}
            >
              <div className="feature-icon">📦</div>
              <h3>Add Stock</h3>
              <p>Add new inventory items to your stock management system</p>
            </div>

            <div 
              className="feature-card"
              onClick={() => navigate('/stock-purchased')}
              style={{ cursor: 'pointer' }}
            >
              <div className="feature-icon">🛒</div>
              <h3>Stock Purchased</h3>
              <p>View and manage your purchased stock and inventory history</p>
            </div>

            <div 
              className="feature-card"
              onClick={() => navigate('/labour-salary')}
              style={{ cursor: 'pointer' }}
            >
              <div className="feature-icon">👷</div>
              <h3>Labour Salary</h3>
              <p>Manage and process salary payments for your workforce</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
