# 05-03-2021-HTML-Form-and-Table
***
## HTML
### I. Khái niệm
>
>- HTML là ngôn ngữ được sử dụng để tạo ra các Webpage.
>- HTML là viết tắt của chữ Hypertext Markup Language (Ngôn ngữ Đánh dấu Siêu Văn bản)
>- • Đánh dấu: sử dụng các thẻ
>- • Siêu văn bản: có thể đi đến văn bản khác thông qua các liên kết (link)
> 
### II. Các thẻ HTML
>
1. Giới thiệu
>- • Một file HTML được lưu với đuôi file là .htm hoặc .html
>- • Một tài liệu HTML được tạo thành từ các thẻ (tag)
>- • Mỗi thẻ HTM bao gồm thẻ mở và thẻ đóng: <tag> và </tag>
>- • Có nhiều thẻ HTML được sử dụng với các mục đích khác nhau:
>>-  • <p>: hiển thị đoạn văn bản
>>-  • <h1>: hiển thị tiêu đề to
>>-  • <a>: hiển thị một liên kết
>>-  • <img>: hiển thị một hình ảnh
>>-  • …
> 
2.Chi tiết thành phần
>
>- • Một thẻ trong HTML có thể có thêm các thuộc tính:
     • Ví dụ: <a href=“http://codegym.vn”>CodeGym</a>
>- • Giá trị của thuộc tính phải nằm trong dấu nháy kép (“”)
>- • Có thể viết chú thích (comment) trong HTML
    • Ví dụ: <!-- Đây là một chú thích -->
>
> a) Các thẻ cơ bản của 1 trang web.
>
>- <html>
    <head>
     <title>Page Title</title>
    </head>
    <body>
        <h1>Tiêu đề tag</h1>
        <p> Nội dung 1 của tag</p>
        <p> Nội dung 2 của tag</p>
    </body>
>- </html>

##### "<h1,h2,h3,...> cũng biểu thị kích thước của tiêu đề,số càng lớn size càng nhỏ."
>
> b) Các loại thẻ và cấu trúc sử dụng:
>
>- <h1>là tag tiêu đề</h1>
>- <p>là tag viết văn bản</p>
>- <a>là thẻ gim 1 đường link</a>
>- <img src="link ảnh" alt="tên ảnh" style="size ảnh">
>- Thẻ tạo danh sách: ul(dùng dấu chấm để đánh dấu dòng),ol(dùng số để đánh dấu dòng),...
>>- Ví dụ:
>>>- <ul>
       <li>một</li> hiển thị là : . một
       <li>hai</li> hiển thị là : . hai
     </ul>

>>>- <ol>
       <li>một</li> hiển thị là : 1.một
       <li>hai</li> hiển thị là : 2.hai
     </ol>
>- <table>lõi</table> là thẻ hiển thị theo dạng bảng chia cột. Gồm 2 phần là <thead>ND đầu bảng</thead> và <tbody>ND thân bảng</tbody>
>>- Cấu trúc: <table>
                   <thead>
                         <th>ND các từng mục</th>(cần bao nhiêu mục thì mở bấy nhiêu dòng.)
                   </thead>
                   <tbody>
                         <tr>ND cần của từng mục trên <th> yêu cầu</tr>(như trên)
                   </tbody>
             </table>
>- <form></form> là cơ chế cho phép người dùng nhập dữ liệu và gửi về cho server. Như form đăng ký,tìm kiếm,khảo sát...! và 1 form có nhiều kiểu nhập dữ liệu khac nhau.
>>- Thẻ form được dùng để tạo 1 form.
>>- Thuộc tính action có giá trị là 1 URL, quy định nơi dữ liệu được gửi đến.
>>- Thuộc tính name là tên của form sau đó được dùng để truy xuât đến các giá trị trong form.
>>- Thẻ <fieldset> và <legend> được sử dụng để nhóm các trường dữ liệu trong form.
>- Thẻ <input> tạo ra các môi trường cho người dùng nhập vào.
>>>- <input type="text"> tạo ra ô để nhập văn bản.
>>>- <input type="checkbox"> tạo ra ô check hình vuông (dùng khi cần chọn nhiều mục).
>>>- <input type="radio"> tạo ra ô check hình tròn (dùng khi chỉ được chon 1 mục).
>- <buttom>tạo ra nút ấn vào</buttom> như nut login,exit...!
>- <div>các loại nội dung</div> dung để tạo 1 khối bên trong co chứa những nội dung khác nhau.
>- Thêm màu sắc cho nội dung trong thẻ ta có mẫu ví dụ: <h1 style="color: màu;">Nội dung đổi màu</h1>
>

######## ĐÂY LÀ KIẾN THỨC TUẦN I #########