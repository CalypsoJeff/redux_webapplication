// import React from 'react';
// import { FaSignOutAlt } from 'react-icons/fa';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { logout, reset } from '../features/admin/adminSlice';

// function AdminHeader() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
// //   const { admin } = useSelector((state) => state.adminAuth);

//   const onLogout = () => {
//     dispatch(logout());
//     dispatch(reset());
//     navigate('/admin/login');
//   };

//   return (
//     <div>
//     <header className='header'>
//       <div className="logo">
//         {/* <Link to='/'>  */}
//         Admin
//          {/* </Link> */}
        
//       </div>
//       <ul>
        
//       {/* { user ?
//        ( */}
//       <ul>
      
//           <li>

//           <button className='btn' 
//           onClick={onLogout}
//           >
//           <FaSignOutAlt /> logout
//           </button>
       
//       </li></ul>

//           {/* // ) : ( */}
//           <>   
//           </>
//           {/* )} */}
        
//       </ul>
//     </header>
//   </div>
//   )
// }


// export default AdminHeader;


import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout, reset } from '../features/admin/adminSlice';

function AdminHeader() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/admin/login');
  };

  // Check if the current route is '/admin/login'
  const isLoginPage = location.pathname === '/admin/login';

  return (
    <div>
      <header className='header'>
        <div className="logo">
          Admin
        </div>
        <ul>
          {!isLoginPage && (
            <li>
              <button className='btn' onClick={onLogout}>
                <FaSignOutAlt /> Logout
              </button>
            </li>
          )}
        </ul>
      </header>
    </div>
  );
}

export default AdminHeader;
