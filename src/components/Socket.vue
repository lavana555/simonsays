<template>
  <div></div>
</template>

<script>
export default {
name: "Socket"
}

let socket = new WebSocket("wss://javascript.info/article/websocket/demo/hello");

socket.onopen = function() {
  alert("[open] Соединение установлено");
  alert("Отправляем данные на сервер");
  socket.send("Меня зовут Джон");
};

socket.onmessage = function(event) {
  // eslint-disable-next-line no-debugger
  //debugger
  alert(`[message] Данные получены с сервера: ${event.data}`);
};

socket.onclose = function(event) {
  if (event.wasClean) {
    alert(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
  } else {
    // например, сервер убил процесс или сеть недоступна
    // обычно в этом случае event.code 1006
    alert('[close] Соединение прервано');
  }
};

socket.onerror = function(error) {
  alert(`[error] ${error.message}`);
};

</script>

<style scoped>

</style>
