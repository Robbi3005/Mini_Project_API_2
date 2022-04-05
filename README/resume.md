Jadi di sini saya berusaha membuat mini project sesuai tas yang di berikan
Membuat Data Base:
-	Saya membuat database di app MySql dengan nama Merchant_Services
-	Saya membuat lagi database di app MySql dengan nama Merchant_Services_2, dengan tujuan ada beberapa code yang berbeda
Membuat Tabel:
-	Saya membuat tabel merchant_info dan product info (di kedua database namanya sama), pada query di vs code > folder config > file setup
-	Pada tabel merchant_info diminta untuk membuat CRUD untuk create dan delete saja, tapi saya coba buat semua CRUD, dengan men-nonaktifkan/comment get/read dan juga update
-	Tabel merchant_info berisi : id, password, name, address, join_date dan phone_number
-	Pada tabel product info saya membuat semua CRUD
-	Tabel product_info berisi : id, name, merchant_id (sebagai fk untuk connect ke pk di tabel merchant_info (id)), quantity, dan price
Membuat Authentication:
-	Di sini saya membuat API login
-	Saya memisahkan api login dengan beberapa mvc yakin pada index.js dan untuk folder terdapat pada router, controller dan middleware
-	Saya menggunakan jwt untuk mendapatkan token
-	Pada folder middlerware file auth saya membuat validasi dengan secret key, jadi ketika user login lalu memberikan secret key, sistem akan merspon memberikan token, yang akan di gunakan untuk mengakses API CRUD
-	Saya menambahkan root ‘/jwt’ untuk mengakses API yang membutuhkan token
-	Root ‘/jwt’ ini saya masukan pada beberapa API pada folder router di file merchant dan product
Memberikan status error:
-	
-	Saya memberikan status error ini pada folder controller, untuk semua file
-	Saya memberikan status error 400: Bad Request (Server tak bisa memenuhi permintaan karena adanya error dari browser Anda.) 
-	Saya memberikan status error 401: Unauthorized (Error ini muncul karena browser tak bisa memberikan bukti kewenangan yang sah saat diminta server.)
-	Saya memberikan status error 404: The requested resource was not found (Error ini menunjukkan bahwa data yang diminta browser itu tidak ada di server.)
Menambahkan markdown (md):
-	Saya membuat file README.md, yang berisikan
-	Merchant.md: List of API contract mengenai table merchant_info
-	Product.md: List of API contract mengenai table product_info 
-	Git.md: keterangan saya menyimpan pada repo apa dan local apa
-	Token.md: menyimpan token hasil post dari postman dengan method jwt

Menambahkan architecture diagram
Menambahkan Entity Relational Diagram (ERD)

Saya kirim 2 assignment, beda code:
Git 1 
https://github.com/Robbi3005/Mini_Project_API_1.git 
Git 2
https://github.com/Robbi3005/Mini_Project_API_2.git
