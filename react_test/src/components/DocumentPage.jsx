

function DocumentPage() {
   // скролл вверх при переключении страницы
   window.scrollTo({
    top: 0,
    left: 0
  });
 
  return (
    <div className="document-page">
        <div className="document-page__wrapper">
          <h2>Документація та звітність</h2>
          <div>
            <img src="assets/image/diplom.jpg" alt="" />
          </div>
        </div>
    </div>
  );
}

export default DocumentPage;
