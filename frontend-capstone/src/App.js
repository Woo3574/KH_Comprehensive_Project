import './style.css';
import { CheckoutPage } from './paySystem/CheckOut';
import { FailPage } from './paySystem/Fail';
import { SuccessPage } from './paySystem/Success';
import GlobalStyle from './styles/GlobalStyle';
import Layout from './styles/Layout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ModalExample from "./example/ModalExample";
import AccordionExample from "./example/AccordionExample";
import AdminNav from "./pages/admin/AdminNav";
import PermissionMain from "./pages/admin/auth/list/PermissionMain";
import PermissionStore from "./context/admin/PermissionStore";
import MyPageNavBar from "./component/MyPageNavBar";
import ChatStore from './context/ChatStore';
import TextStore, { PostLayout } from "./context/TextStore";
import PostListMain from "./pages/text/post/list/PostListMain";
import PostItemMain from "./pages/text/post/item/PostItemMain";
import CoverLetterRegister from './pages/myPage/CoverLetterRegister';
import PersonalStatement from './pages/categoryEnumPS/PersonalStatement';
import PersonalStatementDetail from './pages/categoryEnumPS/PersonalStatementDetail';
import PersonalStatementWrite from './pages/categoryEnumPS/PersonalStatementWrite';
import StudentRecord from './pages/categoryEnumSR/StudentRecord';
import StudentRecordDetail from './pages/categoryEnumSR/StudentRecordDetail';
import PurchasedEnumSR from './pages/myPage/PurchasedEnumSR';
import PurchasedEnumPS from './pages/myPage/PurchasedEnumPS';
import FileUploaderExample from "./example/FileUploaderExample";
import OAuth from './pages/auth/login/OAuth';
import {useState} from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("accessToken")
  );
  return (
    <>
      <GlobalStyle />
      {/* Router를 최상위에서만 사용 */}
      <Router>
        <Routes>

          {/* 메인 레이아웃 적용 */}
          <Route path="/" element={<ChatStore><Layout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /></ChatStore>}>
            <Route path="personalStatement" element={<PersonalStatement />} />
            <Route path="personalStatementDetail" element={<PersonalStatementDetail />} />
            <Route path="personalStatementWrite" element={<PersonalStatementWrite />} />
            <Route path='studentRecord' element={<StudentRecord/>}/>
            <Route path='studentRecordDetail' element={<StudentRecordDetail/>}/>


            {/* 마이페이지 내비게이션 */}
            <Route path="myPageNavBar" element={<MyPageNavBar />}>
              <Route path="coverLetterRegister" element={<CoverLetterRegister />} />
              <Route path="purchasedEnumPS" element={<PurchasedEnumPS />} />
              <Route path="purchasedEnumSR" element={<PurchasedEnumSR />} />
            </Route>

            {/* 테스트 페이지 */}
            <Route path="test/modal" element={<ModalExample />} />
            <Route path="test/accordion" element={<AccordionExample />} />
            <Route path="test/upload" element={<FileUploaderExample/>}/>
            

            {/* 어드민 페이지 */}
            <Route path="admin" element={<PermissionStore><AdminNav /></PermissionStore>}>
              <Route path="auth" element={<PermissionMain />} />
            </Route>

            {/* 게시판 (text Board) */}
            <Route path="post" element={<TextStore><PostLayout /></TextStore>}>
              <Route path="list/:category/:search?/:searchOption?" element={<PostListMain />} />
              <Route path="detail/:id" element={<PostItemMain />} />
            </Route>
            <Route path='auth/oauth-response/:token/:expirationTime' element={<OAuth/>}/>
           
            {/* 결제 관련 페이지 */}
            <Route path="checkoutPage" element={<CheckoutPage />} />
            <Route path="sandbox/success" element={<SuccessPage />} />
            <Route path="checkoutPage/fail" element={<FailPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
