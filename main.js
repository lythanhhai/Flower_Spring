
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

const hearts = document.getElementsByClassName('material-symbols-outlined');
const text = document.getElementsByClassName("Text")[0];
for(let i = 0; i < hearts.length; i++)
{
  var count = 0;
  hearts[i].addEventListener('click', () => {
    const newtext = document.createTextNode("Chúc cậu có một ngày sinh nhật thật ý nghĩa, mãi hạnh phúc và thành công nhá !!! ");
    const oldText = document.createTextNode("Chạm vào trái tim bất kỳ nhaa!!");
    if(count == 0)
    {
      text.appendChild(newtext);
      count++;
      setTimeout(() => {
        text.removeChild(newtext);
        count = 0;
        // alert("a")
      }, 5000);
    }
  })
}