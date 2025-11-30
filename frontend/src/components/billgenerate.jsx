// // // import React from 'react';

// // // const Billgenerate = () => {
// // //     return (
// // //         <div>Billgenerate Component</div>
// // //     )
// // // }

// // // export default Billgenerate;
// // import React, { useState } from 'react';
// // import './billgenerate.css';

// // const Billgenerate = () => {
// //   const [showModal, setShowModal] = useState(false);

// //   const handleAddBill = () => {
// //     setShowModal(true);
// //   };

// //   const handleCloseModal = () => {
// //     setShowModal(false);
// //   };

// //   return (
// //     <div className="billgenerate-container">
// //       {/* Empty State */}
// //       <div className="empty-state">
// //         <div className="empty-icon">📄</div>
// //         <h2>No Recent Activities</h2>
// //         <p>Click the + button to create your first bill</p>
// //       </div>

// //       {/* Floating Add Button */}
// //       <button className="floating-add-btn" onClick={handleAddBill}>
// //         +
// //       </button>

// //       {/* Modal for creating bill */}
// //       {showModal && (
// //         <div className="modal-overlay" onClick={handleCloseModal}>
// //           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
// //             <div className="modal-header">
// //               <h2>Create New Bill</h2>
// //               <button className="close-btn" onClick={handleCloseModal}>×</button>
// //             </div>
// //             <form className="bill-form">
// //               <div className="form-row">
// //                 <div className="form-group">
// //                   <label>Customer Name</label>
// //                   <input type="text" placeholder="Enter customer name" required />
// //                 </div>
// //                 <div className="form-group">
// //                   <label>Date</label>
// //                   <input type="date" required />
// //                 </div>
// //               </div>

// //               <div className="form-row">
// //                 <div className="form-group">
// //                   <label>Product/Service</label>
// //                   <input type="text" placeholder="Enter product name" required />
// //                 </div>
// //                 <div className="form-group">
// //                   <label>Quantity</label>
// //                   <input type="number" placeholder="0" required />
// //                 </div>
// //               </div>

// //               <div className="form-row">
// //                 <div className="form-group">
// //                   <label>Price per Unit</label>
// //                   <input type="number" placeholder="0.00" step="0.01" required />
// //                 </div>
// //                 <div className="form-group">
// //                   <label>Total Amount</label>
// //                   <input type="number" placeholder="0.00" step="0.01" required />
// //                 </div>
// //               </div>

// //               <div className="form-group">
// //                 <label>Notes (Optional)</label>
// //                 <textarea placeholder="Add any additional notes" rows="3"></textarea>
// //               </div>

// //               <div className="modal-actions">
// //                 <button type="button" className="cancel-btn" onClick={handleCloseModal}>
// //                   Cancel
// //                 </button>
// //                 <button type="submit" className="submit-btn">
// //                   Generate Bill
// //                 </button>
// //               </div>
// //             </form>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Billgenerate;
// import React, { useState, useEffect } from 'react';
// import './billgenerate.css';

// const Billgenerate = () => {
//   const [showModal, setShowModal] = useState(false);
  
//   // Bill header state
//   const [billNo, setBillNo] = useState(1);
//   const [companyName, setCompanyName] = useState('');
//   const [billDate, setBillDate] = useState(new Date().toISOString().split('T')[0]);
  
//   // History for autocomplete
//   const [companyHistory, setCompanyHistory] = useState([]);
//   const [colourHistory, setColourHistory] = useState([]);
//   const [countHistory, setCountHistory] = useState([]);
//   const [lengthHistory, setLengthHistory] = useState([]);
//   const [quantityHistory, setQuantityHistory] = useState([]);
  
//   // Dropdown visibility states
//   const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
//   const [showColourDropdown, setShowColourDropdown] = useState(false);
//   const [showCountDropdown, setShowCountDropdown] = useState(false);
//   const [showLengthDropdown, setShowLengthDropdown] = useState(false);
//   const [showQuantityDropdown, setShowQuantityDropdown] = useState(false);
  
//   // Current row being edited
//   const [currentRow, setCurrentRow] = useState({
//     slNo: 1,
//     colour: '',
//     count: '',
//     length: '',
//     quantity: '',
//     amount: ''
//   });
  
//   // Completed rows
//   const [rows, setRows] = useState([]);
  
//   // Load history and bill number from localStorage on mount
//   useEffect(() => {
//     const savedBillNo = localStorage.getItem('lastBillNo');
//     const savedCompanyHistory = localStorage.getItem('companyHistory');
//     const savedColourHistory = localStorage.getItem('colourHistory');
//     const savedCountHistory = localStorage.getItem('countHistory');
//     const savedLengthHistory = localStorage.getItem('lengthHistory');
//     const savedQuantityHistory = localStorage.getItem('quantityHistory');
    
//     if (savedBillNo) setBillNo(parseInt(savedBillNo) + 1);
//     if (savedCompanyHistory) setCompanyHistory(JSON.parse(savedCompanyHistory));
//     if (savedColourHistory) setColourHistory(JSON.parse(savedColourHistory));
//     if (savedCountHistory) setCountHistory(JSON.parse(savedCountHistory));
//     if (savedLengthHistory) setLengthHistory(JSON.parse(savedLengthHistory));
//     if (savedQuantityHistory) setQuantityHistory(JSON.parse(savedQuantityHistory));
//   }, []);

//   const handleAddBill = () => {
//     setShowModal(true);
//     setRows([]);
//     setCurrentRow({
//       slNo: 1,
//       colour: '',
//       count: '',
//       length: '',
//       quantity: '',
//       amount: ''
//     });
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     setCompanyName('');
//     setBillDate(new Date().toISOString().split('T')[0]);
//     setRows([]);
//   };

//   // Add to history helper
//   const addToHistory = (value, history, setHistory, storageKey) => {
//     if (value && !history.includes(value)) {
//       const newHistory = [value, ...history].slice(0, 10); // Keep last 10
//       setHistory(newHistory);
//       localStorage.setItem(storageKey, JSON.stringify(newHistory));
//     }
//   };

//   // Filter history based on input
//   const filterHistory = (input, history) => {
//     if (!input) return history;
//     return history.filter(item => 
//       item.toLowerCase().includes(input.toLowerCase())
//     );
//   };

//   const handleAddRow = () => {
//     if (currentRow.colour && currentRow.count && currentRow.length && 
//         currentRow.quantity && currentRow.amount) {
      
//       // Add to histories
//       addToHistory(currentRow.colour, colourHistory, setColourHistory, 'colourHistory');
//       addToHistory(currentRow.count, countHistory, setCountHistory, 'countHistory');
//       addToHistory(currentRow.length, lengthHistory, setLengthHistory, 'lengthHistory');
//       addToHistory(currentRow.quantity, quantityHistory, setQuantityHistory, 'quantityHistory');
      
//       // Add row to completed rows
//       setRows([...rows, currentRow]);
      
//       // Reset current row with incremented slNo
//       setCurrentRow({
//         slNo: currentRow.slNo + 1,
//         colour: '',
//         count: '',
//         length: '',
//         quantity: '',
//         amount: ''
//       });
//     }
//   };

//   const handleSubmitBill = (e) => {
//     e.preventDefault();
    
//     if (companyName && rows.length > 0) {
//       // Add company to history
//       addToHistory(companyName, companyHistory, setCompanyHistory, 'companyHistory');
      
//       // Save bill number
//       localStorage.setItem('lastBillNo', billNo.toString());
      
//       // Here you would typically send data to backend
//       const billData = {
//         billNo,
//         companyName,
//         date: billDate,
//         items: rows
//       };
      
//       console.log('Bill submitted:', billData);
      
//       // Increment bill number for next bill
//       setBillNo(billNo + 1);
      
//       // Close modal and reset
//       handleCloseModal();
      
//       alert('Bill generated successfully!');
//     } else {
//       alert('Please fill company name and add at least one item');
//     }
//   };

//   return (
//     <div className="billgenerate-container">
//       {/* Empty State */}
//       <div className="empty-state">
//         <div className="empty-icon">📄</div>
//         <h2>No Recent Activities</h2>
//         <p>Click the + button to create your first bill</p>
//       </div>

//       {/* Floating Add Button */}
//       <button className="floating-add-btn" onClick={handleAddBill}>
//         +
//       </button>

//       {/* Modal for creating bill */}
//       {showModal && (
//         <div className="modal-overlay" onClick={handleCloseModal}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <div className="modal-header">
//               <h2>Create New Bill</h2>
//               <button className="close-btn" onClick={handleCloseModal}>×</button>
//             </div>
            
//             <form className="bill-form" onSubmit={handleSubmitBill}>
//               {/* Bill Header Section */}
//               <div className="bill-header-section">
//                 <div className="form-row">
//                   <div className="form-group">
//                     <label>Bill No.</label>
//                     <input 
//                       type="number" 
//                       value={billNo} 
//                       readOnly 
//                       className="readonly-input"
//                     />
//                   </div>
                  
//                   <div className="form-group autocomplete-wrapper">
//                     <label>Company Name</label>
//                     <input
//                       type="text"
//                       value={companyName}
//                       onChange={(e) => {
//                         setCompanyName(e.target.value);
//                         setShowCompanyDropdown(true);
//                       }}
//                       onFocus={() => setShowCompanyDropdown(true)}
//                       onBlur={() => setTimeout(() => setShowCompanyDropdown(false), 200)}
//                       placeholder="Enter company name"
//                       required
//                     />
//                     {showCompanyDropdown && companyHistory.length > 0 && (
//                       <div className="autocomplete-dropdown">
//                         {filterHistory(companyName, companyHistory).map((item, idx) => (
//                           <div
//                             key={idx}
//                             className="autocomplete-item"
//                             onClick={() => {
//                               setCompanyName(item);
//                               setShowCompanyDropdown(false);
//                             }}
//                           >
//                             {item}
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>
                  
//                   <div className="form-group">
//                     <label>Date</label>
//                     <input
//                       type="date"
//                       value={billDate}
//                       onChange={(e) => setBillDate(e.target.value)}
//                       required
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Display Added Rows */}
//               {rows.length > 0 && (
//                 <div className="added-rows-section">
//                   <h3>Bill Items</h3>
//                   <div className="rows-display">
//                     {rows.map((row, index) => (
//                       <div key={index} className="row-display-item">
//                         <span><strong>SL:</strong> {row.slNo}</span>
//                         <span><strong>Colour:</strong> {row.colour}</span>
//                         <span><strong>Count:</strong> {row.count}</span>
//                         <span><strong>Length:</strong> {row.length}m</span>
//                         <span><strong>Qty:</strong> {row.quantity}</span>
//                         <span><strong>Amount:</strong> ₹{row.amount}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Current Row Input Section */}
//               <div className="current-row-section">
//                 <h3>Add Item</h3>
                
//                 <div className="form-row">
//                   <div className="form-group">
//                     <label>SL No.</label>
//                     <input
//                       type="number"
//                       value={currentRow.slNo}
//                       readOnly
//                       className="readonly-input"
//                     />
//                   </div>
                  
//                   <div className="form-group autocomplete-wrapper">
//                     <label>Colour</label>
//                     <input
//                       type="text"
//                       value={currentRow.colour}
//                       onChange={(e) => {
//                         setCurrentRow({...currentRow, colour: e.target.value});
//                         setShowColourDropdown(true);
//                       }}
//                       onFocus={() => setShowColourDropdown(true)}
//                       onBlur={() => setTimeout(() => setShowColourDropdown(false), 200)}
//                       placeholder="Enter colour"
//                     />
//                     {showColourDropdown && colourHistory.length > 0 && (
//                       <div className="autocomplete-dropdown">
//                         {filterHistory(currentRow.colour, colourHistory).map((item, idx) => (
//                           <div
//                             key={idx}
//                             className="autocomplete-item"
//                             onClick={() => {
//                               setCurrentRow({...currentRow, colour: item});
//                               setShowColourDropdown(false);
//                             }}
//                           >
//                             {item}
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>
                  
//                   <div className="form-group autocomplete-wrapper">
//                     <label>Count (இலை)</label>
//                     <input
//                       type="text"
//                       value={currentRow.count}
//                       onChange={(e) => {
//                         setCurrentRow({...currentRow, count: e.target.value});
//                         setShowCountDropdown(true);
//                       }}
//                       onFocus={() => setShowCountDropdown(true)}
//                       onBlur={() => setTimeout(() => setShowCountDropdown(false), 200)}
//                       placeholder="Enter count"
//                     />
//                     {showCountDropdown && countHistory.length > 0 && (
//                       <div className="autocomplete-dropdown">
//                         {filterHistory(currentRow.count, countHistory).map((item, idx) => (
//                           <div
//                             key={idx}
//                             className="autocomplete-item"
//                             onClick={() => {
//                               setCurrentRow({...currentRow, count: item});
//                               setShowCountDropdown(false);
//                             }}
//                           >
//                             {item}
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                 <div className="form-row">
//                   <div className="form-group autocomplete-wrapper">
//                     <label>Length (m)</label>
//                     <input
//                       type="text"
//                       value={currentRow.length}
//                       onChange={(e) => {
//                         setCurrentRow({...currentRow, length: e.target.value});
//                         setShowLengthDropdown(true);
//                       }}
//                       onFocus={() => setShowLengthDropdown(true)}
//                       onBlur={() => setTimeout(() => setShowLengthDropdown(false), 200)}
//                       placeholder="Enter length"
//                     />
//                     {showLengthDropdown && lengthHistory.length > 0 && (
//                       <div className="autocomplete-dropdown">
//                         {filterHistory(currentRow.length, lengthHistory).map((item, idx) => (
//                           <div
//                             key={idx}
//                             className="autocomplete-item"
//                             onClick={() => {
//                               setCurrentRow({...currentRow, length: item});
//                               setShowLengthDropdown(false);
//                             }}
//                           >
//                             {item}
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>
                  
//                   <div className="form-group autocomplete-wrapper">
//                     <label>Quantity</label>
//                     <input
//                       type="text"
//                       value={currentRow.quantity}
//                       onChange={(e) => {
//                         setCurrentRow({...currentRow, quantity: e.target.value});
//                         setShowQuantityDropdown(true);
//                       }}
//                       onFocus={() => setShowQuantityDropdown(true)}
//                       onBlur={() => setTimeout(() => setShowQuantityDropdown(false), 200)}
//                       placeholder="Enter quantity"
//                     />
//                     {showQuantityDropdown && quantityHistory.length > 0 && (
//                       <div className="autocomplete-dropdown">
//                         {filterHistory(currentRow.quantity, quantityHistory).map((item, idx) => (
//                           <div
//                             key={idx}
//                             className="autocomplete-item"
//                             onClick={() => {
//                               setCurrentRow({...currentRow, quantity: item});
//                               setShowQuantityDropdown(false);
//                             }}
//                           >
//                             {item}
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>
                  
//                   <div className="form-group">
//                     <label>Amount</label>
//                     <input
//                       type="number"
//                       step="0.01"
//                       value={currentRow.amount}
//                       onChange={(e) => setCurrentRow({...currentRow, amount: e.target.value})}
//                       placeholder="0.00"
//                     />
//                   </div>
//                 </div>

//                 {/* Add Row Button */}
//                 <div className="add-row-btn-container">
//                   <button 
//                     type="button" 
//                     className="add-row-btn"
//                     onClick={handleAddRow}
//                   >
//                     + Add Item
//                   </button>
//                 </div>
//               </div>

//               {/* Modal Actions */}
//               <div className="modal-actions">
//                 <button type="button" className="cancel-btn" onClick={handleCloseModal}>
//                   Cancel
//                 </button>
//                 <button type="submit" className="submit-btn">
//                   Generate Bill
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Billgenerate;

import React, { useState, useEffect } from 'react';
import './billgenerate.css';

const Billgenerate = () => {
  const [showModal, setShowModal] = useState(false);
  
  // Bill header state
  const [billNo, setBillNo] = useState(1);
  const [companyName, setCompanyName] = useState('');
  const [billDate, setBillDate] = useState(new Date().toISOString().split('T')[0]);
  
  // History for autocomplete
  const [companyHistory, setCompanyHistory] = useState([]);
  const [colourHistory, setColourHistory] = useState([]);
  const [countHistory, setCountHistory] = useState([]);
  const [lengthHistory, setLengthHistory] = useState([]);
  const [quantityHistory, setQuantityHistory] = useState([]);
  
  // Dropdown visibility states
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
  const [showColourDropdown, setShowColourDropdown] = useState(false);
  const [showCountDropdown, setShowCountDropdown] = useState(false);
  const [showLengthDropdown, setShowLengthDropdown] = useState(false);
  const [showQuantityDropdown, setShowQuantityDropdown] = useState(false);
  
  // Current row being edited
  const [currentRow, setCurrentRow] = useState({
    slNo: 1,
    colour: '',
    count: '',
    length: '',
    quantity: '',
    amount: ''
  });
  
  // Completed rows
  const [rows, setRows] = useState([]);
  
  // Load history and bill number from localStorage on mount
  useEffect(() => {
    const savedBillNo = localStorage.getItem('lastBillNo');
    const savedCompanyHistory = localStorage.getItem('companyHistory');
    const savedColourHistory = localStorage.getItem('colourHistory');
    const savedCountHistory = localStorage.getItem('countHistory');
    const savedLengthHistory = localStorage.getItem('lengthHistory');
    const savedQuantityHistory = localStorage.getItem('quantityHistory');
    
    if (savedBillNo) setBillNo(parseInt(savedBillNo) + 1);
    if (savedCompanyHistory) setCompanyHistory(JSON.parse(savedCompanyHistory));
    if (savedColourHistory) setColourHistory(JSON.parse(savedColourHistory));
    if (savedCountHistory) setCountHistory(JSON.parse(savedCountHistory));
    if (savedLengthHistory) setLengthHistory(JSON.parse(savedLengthHistory));
    if (savedQuantityHistory) setQuantityHistory(JSON.parse(savedQuantityHistory));
  }, []);

  const handleAddBill = () => {
    setShowModal(true);
    setRows([]);
    setCurrentRow({
      slNo: 1,
      colour: '',
      count: '',
      length: '',
      quantity: '',
      amount: ''
    });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCompanyName('');
    setBillDate(new Date().toISOString().split('T')[0]);
    setRows([]);
  };

  // Add to history helper
  const addToHistory = (value, history, setHistory, storageKey) => {
    if (value && !history.includes(value)) {
      const newHistory = [value, ...history].slice(0, 10); // Keep last 10
      setHistory(newHistory);
      localStorage.setItem(storageKey, JSON.stringify(newHistory));
    }
  };

  // Filter history based on input
  const filterHistory = (input, history) => {
    if (!input) return history;
    return history.filter(item => 
      item.toLowerCase().includes(input.toLowerCase())
    );
  };

  const handleAddRow = () => {
    if (currentRow.colour && currentRow.count && currentRow.length && 
        currentRow.quantity && currentRow.amount) {
      
      // Add to histories
      addToHistory(currentRow.colour, colourHistory, setColourHistory, 'colourHistory');
      addToHistory(currentRow.count, countHistory, setCountHistory, 'countHistory');
      addToHistory(currentRow.length, lengthHistory, setLengthHistory, 'lengthHistory');
      addToHistory(currentRow.quantity, quantityHistory, setQuantityHistory, 'quantityHistory');
      
      // Add row to completed rows
      setRows([...rows, currentRow]);
      
      // Reset current row with incremented slNo
      setCurrentRow({
        slNo: currentRow.slNo + 1,
        colour: '',
        count: '',
        length: '',
        quantity: '',
        amount: ''
      });
    }
  };

  const handleSubmitBill = (e) => {
    e.preventDefault();
    
    if (companyName && rows.length > 0) {
      // Add company to history
      addToHistory(companyName, companyHistory, setCompanyHistory, 'companyHistory');
      
      // Save bill number
      localStorage.setItem('lastBillNo', billNo.toString());
      
      // Here you would typically send data to backend
      const billData = {
        billNo,
        companyName,
        date: billDate,
        items: rows
      };
      
      console.log('Bill submitted:', billData);
      
      // Increment bill number for next bill
      setBillNo(billNo + 1);
      
      // Close modal and reset
      handleCloseModal();
      
      alert('Bill generated successfully!');
    } else {
      alert('Please fill company name and add at least one item');
    }
  };

  return (
    <div className="billgenerate-container">
      {/* Empty State */}
      <div className="empty-state">
        <div className="empty-icon">📄</div>
        <h2>No Recent Activities</h2>
        <p>Click the + button to create your first bill</p>
      </div>

      {/* Floating Add Button */}
      <button className="floating-add-btn" onClick={handleAddBill}>
        +
      </button>

      {/* Modal for creating bill */}
      {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Create New Bill</h2>
              <button className="close-btn" onClick={handleCloseModal}>×</button>
            </div>
            
            <form className="bill-form" onSubmit={handleSubmitBill}>
              {/* Bill Header Section */}
              <div className="bill-header-section">
                <div className="form-row">
                  <div className="form-group">
                    <label>Bill No.</label>
                    <input 
                      type="number" 
                      value={billNo} 
                      readOnly 
                      className="readonly-input"
                    />
                  </div>
                  
                  <div className="form-group autocomplete-wrapper">
                    <label>Company Name</label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => {
                        setCompanyName(e.target.value);
                        setShowCompanyDropdown(true);
                      }}
                      onFocus={() => setShowCompanyDropdown(true)}
                      onBlur={() => setTimeout(() => setShowCompanyDropdown(false), 300)}
                      placeholder="Enter company name"
                      required
                    />
                    {showCompanyDropdown && companyHistory.length > 0 && (
                      <div className="autocomplete-dropdown">
                        {filterHistory(companyName, companyHistory).map((item, idx) => (
                          <div
                            key={idx}
                            className="autocomplete-item"
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => {
                              setCompanyName(item);
                              setShowCompanyDropdown(false);
                            }}
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className="form-group">
                    <label>Date</label>
                    <input
                      type="date"
                      value={billDate}
                      onChange={(e) => setBillDate(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Display Added Rows */}
              {rows.length > 0 && (
                <div className="added-rows-section">
                  <h3>Bill Items</h3>
                  <div className="rows-display">
                    {rows.map((row, index) => (
                      <div key={index} className="row-display-item">
                        <span><strong>SL:</strong> {row.slNo}</span>
                        <span><strong>Colour:</strong> {row.colour}</span>
                        <span><strong>Count:</strong> {row.count}</span>
                        <span><strong>Length:</strong> {row.length}m</span>
                        <span><strong>Qty:</strong> {row.quantity}</span>
                        <span><strong>Amount:</strong> ₹{row.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Current Row Input Section */}
              <div className="current-row-section">
                <h3>Add Item</h3>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>SL No.</label>
                    <input
                      type="number"
                      value={currentRow.slNo}
                      readOnly
                      className="readonly-input"
                    />
                  </div>
                  
                  <div className="form-group autocomplete-wrapper">
                    <label>Colour</label>
                    <input
                      type="text"
                      value={currentRow.colour}
                      onChange={(e) => {
                        setCurrentRow({...currentRow, colour: e.target.value});
                        setShowColourDropdown(true);
                      }}
                      onFocus={() => setShowColourDropdown(true)}
                      onBlur={() => setTimeout(() => setShowColourDropdown(false), 300)}
                      placeholder="Enter colour"
                    />
                    {showColourDropdown && colourHistory.length > 0 && (
                      <div className="autocomplete-dropdown">
                        {filterHistory(currentRow.colour, colourHistory).map((item, idx) => (
                          <div
                            key={idx}
                            className="autocomplete-item"
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => {
                              setCurrentRow({...currentRow, colour: item});
                              setShowColourDropdown(false);
                            }}
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className="form-group autocomplete-wrapper">
                    <label>Count (இலை)</label>
                    <input
                      type="text"
                      value={currentRow.count}
                      onChange={(e) => {
                        setCurrentRow({...currentRow, count: e.target.value});
                        setShowCountDropdown(true);
                      }}
                      onFocus={() => setShowCountDropdown(true)}
                      onBlur={() => setTimeout(() => setShowCountDropdown(false), 300)}
                      placeholder="Enter count"
                    />
                    {showCountDropdown && countHistory.length > 0 && (
                      <div className="autocomplete-dropdown">
                        {filterHistory(currentRow.count, countHistory).map((item, idx) => (
                          <div
                            key={idx}
                            className="autocomplete-item"
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => {
                              setCurrentRow({...currentRow, count: item});
                              setShowCountDropdown(false);
                            }}
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group autocomplete-wrapper">
                    <label>Length (m)</label>
                    <input
                      type="text"
                      value={currentRow.length}
                      onChange={(e) => {
                        setCurrentRow({...currentRow, length: e.target.value});
                        setShowLengthDropdown(true);
                      }}
                      onFocus={() => setShowLengthDropdown(true)}
                      onBlur={() => setTimeout(() => setShowLengthDropdown(false), 300)}
                      placeholder="Enter length"
                    />
                    {showLengthDropdown && lengthHistory.length > 0 && (
                      <div className="autocomplete-dropdown">
                        {filterHistory(currentRow.length, lengthHistory).map((item, idx) => (
                          <div
                            key={idx}
                            className="autocomplete-item"
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => {
                              setCurrentRow({...currentRow, length: item});
                              setShowLengthDropdown(false);
                            }}
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className="form-group autocomplete-wrapper">
                    <label>Quantity</label>
                    <input
                      type="text"
                      value={currentRow.quantity}
                      onChange={(e) => {
                        setCurrentRow({...currentRow, quantity: e.target.value});
                        setShowQuantityDropdown(true);
                      }}
                      onFocus={() => setShowQuantityDropdown(true)}
                      onBlur={() => setTimeout(() => setShowQuantityDropdown(false), 300)}
                      placeholder="Enter quantity"
                    />
                    {showQuantityDropdown && quantityHistory.length > 0 && (
                      <div className="autocomplete-dropdown">
                        {filterHistory(currentRow.quantity, quantityHistory).map((item, idx) => (
                          <div
                            key={idx}
                            className="autocomplete-item"
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => {
                              setCurrentRow({...currentRow, quantity: item});
                              setShowQuantityDropdown(false);
                            }}
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className="form-group">
                    <label>Amount</label>
                    <input
                      type="number"
                      step="0.01"
                      value={currentRow.amount}
                      onChange={(e) => setCurrentRow({...currentRow, amount: e.target.value})}
                      placeholder="0.00"
                    />
                  </div>
                </div>

                {/* Add Row Button */}
                <div className="add-row-btn-container">
                  <button 
                    type="button" 
                    className="add-row-btn"
                    onClick={handleAddRow}
                  >
                    + Add Item
                  </button>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="modal-actions">
                <button type="button" className="cancel-btn" onClick={handleCloseModal}>
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  Generate Bill
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Billgenerate;