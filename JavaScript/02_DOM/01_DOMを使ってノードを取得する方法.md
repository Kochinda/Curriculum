# ノードの取得方法

## ノードの取得方法一覧
- IDから取得
- CLASSから取得
- 要素名から取得
- nameから取得
- CSSセレクタから取得（1つだけ）
- CSSセレクタから取得（マッチする要素すべて）
- 親要素を取得
- 子要素を取得


### IDから取得
```
document.getElementById('id名');
```
	
例）
	
```
<ul>
  <li id="red">赤</li>
  <li id="blue">ブルー</li>
  <li id="green">グリーン</li>
</ul>
```
	
li[ブルー]を取得する
	
```
let blue = document.getElementById('blue');
console.log(blue);
```	

### CLASSから取得
```
document.getElementsByClassName('class名')
```

例）
	
```
<ul>
  <li class="red">赤</li>
  <li class="blue">ブルー</li>
  <li class="green">グリーン1</li>
  <li class="green">グリーン2</li>
</ul>
```
	
li[グリーン1, グリーン2]を取得する
	
```
let green = document.getElementsByClassName('green');
console.log(green.item(0).textContent);
console.log(green.item(1).textContent);
```	

### 要素名から取得
```
document.getElementsByTagName('タグ名');
```
	
例）
	
```
<ul>
  <li id="red">赤</li>
  <li id="blue">ブルー</li>
  <li id="green">グリーン</li>
</ul>
```
	
liをすべて取得する
	
```
let liArray = document.getElementsByTagName('li');
for (let i = 0; i < liArray.length; i++) {
  console.log(liArray.item(i).textContent);
}
```	

### nameから取得
```
document.getElementsByName('タグ名');
```
	
例）
	
```
<form action="" id="form">
  <div>
    <label>名前</label>
    <input type="text" name='name' value="山田太郎">
  </div>
  <div>
    <label>メールアドレス</label>
    <input type="text" name='email' value="yamada@example.com">
  </div>
  <button type="button" id="submit">送信</button>
</form>
```
	
input[name="name"]、input[name="email"]を取得する
	
```
let name = document.getElementsByName('name')
console.log(name[0].value);

let email = document.getElementsByName('email')
console.log(email[0].value);
```	

### CSSセレクタから取得（1つだけ）
```
document.querySelector('セレクタ');
```
	
例）
	
```
<ul id="box">
  <li class="color">赤</li>
  <li class="color">ブルー</li>
  <li class="color">グリーン</li>
</ul>
```
	
li[赤]を取得する
	
```
let color = document.querySelector('#box .color');
console.log(color.textContent);
```	

### CSSセレクタから取得（マッチする要素すべて）
```
document.querySelectorAll('セレクタ');
```
	
例）
	
```
<ul id="box">
  <li class="color">赤</li>
  <li class="color">ブルー</li>
  <li class="color">グリーン</li>
</ul>
```
	
liをすべて取得する
	
```
let colors = document.querySelectorAll('#box .color');
for (color of colors) {
	console.log(color);
}
```	

### 親ノードを取得
```
ノード.parentElement; 
```
	
例）
	
```
<ul id="box">
  <li id="red">赤</li>
  <li id="blue">ブルー</li>
  <li id="green">グリーン</li>
</ul>
```
	
ulを取得する
	
```
let red = document.getElementById('red');
let ul = red.parentElement;
console.log(ul);

ul.style.backgroundColor = 'pink';
```	

### 子要素を取得
```
ノード.children; 
```
	
例）
	
```
<ul id="box">
  <li id="red">赤</li>
  <li id="blue">ブルー</li>
  <li id="green">グリーン</li>
</ul>
```
	
liをすべて取得する
	
```
let box = document.getElementById('box');
let liList = box.children;

for (li of liList) {
  console.log(li.textContent)
}

```	