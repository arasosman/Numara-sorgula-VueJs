import axios from 'axios'
import ApiService from './api.service'

export default {
    GetNumberData(number) {
        return ApiService.get('/numara/tel/' + number,)
    },
    GetNumbers() {
        return ApiService.get('/numara/lastCommentNumbers')
    },
    SendComment(data){
        return ApiService.post('/comment',{data})
    },
    SendNegative(id) {
        return ApiService.put('/rate/negative/'+id)
    },
    SendPositive(id){
        return ApiService.put('/rate/positive/'+id)
    }
}
