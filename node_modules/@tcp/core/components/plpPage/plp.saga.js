import { call, put, takeLatest } from 'redux-saga/effects'
import { PLP_CONSTANTS } from "./plp.constants";
import { setPlpProducts } from "./plp.actions";
import fetchData  from '../../service/API';
import { endpoints } from '../../service/endpoint';


function* fetchProducts(action) {
    try {
        const {baseURI, relURI} = endpoints.getPlpProducts;
       const res = yield call(fetchData,baseURI, relURI);
       yield put(setPlpProducts(res.data.response.products));
    } catch (err) {
        console.log("Error in API");
        console.log(err);    
    }
 }
  
  function* plpSaga() {
    yield takeLatest(PLP_CONSTANTS.FETCH_PRODUCTS, fetchProducts);
  }
  
  export default plpSaga;