export function renderFooter() {
  const footer = document.querySelector("#footer");

  //푸터에 코드 생성
  footer.innerHTML = `
    <footer class="inner-pd d-flex flex-column align-items-center g-1">
      <p>&copy; 2014. All rights reserved. Questions?</p>
      <p>Email us at <a href="#" class="text-link">Link Text</a> office@product.com</p>
    </footer>
  `;
}
