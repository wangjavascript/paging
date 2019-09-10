
import Mock from 'mockjs'


let data = Mock.mock({
    'list|50': [
        { 'id|+1': 1, 'email': '@email', 'name': '@cname', 'title': '@ctitle' }
    ]
})


Mock.mock('/list', 'post', function (options) {
    let { page, pageSize } = JSON.parse(options.body)
    let list = data.list.slice((page - 1) * pageSize, (page * pageSize))
    return {
        'dq':list[0].id,
        'total': data.length,
        'page': page,
        'pageSize': pageSize,
        'list': list
    }
})