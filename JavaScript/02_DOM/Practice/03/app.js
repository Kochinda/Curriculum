document.getElementById('addBtn').addEventListener('click', function() {
  //入力内容取得
  let task = document.getElementById('task');

  // liを作成
  let li = document.createElement('li');
  li.textContent = task.value;
  
  // リストに作成したliを追加
  let list = document.getElementById('list');
  list.insertBefore(li, list.firstChild);

});

document.getElementById('deleteBtn').addEventListener('click', function() {
  let list = document.getElementById('list');
  list.removeChild(list.firstChild);
})