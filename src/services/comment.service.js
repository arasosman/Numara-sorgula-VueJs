import ApiService from './api.service'

export default {
    SendComment(data){
        return ApiService.post('/comment',{data})
    },
    SendNegative(id) {
        return ApiService.put('/comment/negative/'+id)
    },
    SendPositive(id){
        return ApiService.put('/comment/positive/'+id)
    }
}
