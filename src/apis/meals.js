import req from './https.js'

// 定義接口
// export const apiGetMeals = () => req('get', '/meals')
// export const apiCreateMeals = (data) => req('post', '/meals', data)
// export const apiEditMeals = (id, data) => req('put', '/meals' + '/:' + id, data)
// export const apiDelMeals = (id) => req('delete', '/meals' + '/:' + id)

let meals = [
    {
      name: "牛肉麵 大",
      unit: "碗",
      price: "150",
      cost: "70",
      type: "麵",
    },
    {
      name: "鳥蛋",
      unit: "5顆 / 份",
      price: "20",
      cost: "10",
      type: "滷味",
    },
];
export const apiGetMeals = () => {
    return new Promise(function (resolve) {
        return resolve({data: meals});
    });
}
export const apiCreateMeals = (data) => req('post', '/meals', data)
export const apiEditMeals = (id, data) => req('put', '/meals' + '/:' + id, data)
export const apiDelMeals = (id) => req('delete', '/meals' + '/:' + id)


