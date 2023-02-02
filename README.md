# Store RESTful API with Sorting, Filtering, Pagination, Regex

Store API is a RESTful API that allows for the creation, retrieval, updating, and deletion of store products. It supports HTTP methods including GET, POST, PATCH, and DELETE. Additionally, you can pass query parameters in the URL to filter results, such as by product name, featured status, company name, and select fields. The API also allows you to sort results in ascending or descending order and limit the number of results displayed per page.

Some of the key features of the Store REST API include:

- Product creation, editing, and deletion
- Product listing and search
- Sorting, Filtering, Pagination.

The API documentation provides full details on how to use the API, including examples of API requests and responses.

## Demo

https://store-rest-api-qo9n.onrender.com/

## API Reference

#### Get all products

```http
  GET /api/v1/products
```

#### Create a product

```http
  POST /api/v1/products
```

#### Get a single product

```http
  GET /api/v1/products/[INSERT_PRODUCT_ID]
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Update a product

```http
  PATCH /api/v1/products/[INSERT_PRODUCT_ID]
```

| Parameter | Type     | Description                        |
| :-------- | :------- | :--------------------------------- |
| `id`      | `string` | **Required**. Id of item to update |

#### Delete a product

```http
  DELETE /api/v1/products/[INSERT_PRODUCT_ID]
```

| Parameter | Type     | Description                        |
| :-------- | :------- | :--------------------------------- |
| `id`      | `string` | **Required**. Id of item to delete |

#### QUERY PARAMETERS

| Parameter  | Type      | Description                                                                                                                                                                                                                                       |
| :--------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `name`     | `String`  | Displays the products typed in the name paramter.                                                                                                                                                                                                 |
| `featured` | `Boolean` | Displays the products by featured type (True/False)                                                                                                                                                                                               |
| `company`  | `String`  | Displays the products by company name.                                                                                                                                                                                                            |
| `fields`   | `String`  | Displays the products with only selected name fields.                                                                                                                                                                                             |
| `sort`     | `String`  | Displays sorted products. here's how to use it - ?sort=price returns products in descending price order while ?sort=-price returns products in ascending price order. You can use it with other query parameters such as name, company, etc also. |
| `limit`    | `Number`  | Choose the number of products you want per page displayed.                                                                                                                                                                                        |
| `page`     | `Number`  | By default 10 products are displayed per page. This parameter helps navigate to different pages.                                                                                                                                                  |

## Run Locally

Clone the project

```bash
  git clone https://github.com/Sidc29/Store-Restful-API.git
```

Go to the project directory

```bash
  cd Store-Restful-API
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_URI`

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Authors

- [@sidc29](https://www.github.com/sidc29)

## 🔗 Links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](http://shiddharth-portfolio.vercel.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/shiddharth-choudhari-aaa22b260/)
