<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>عرض فصل رواية</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
    <div class="container">
        <div class="chapter-header">
            <div class="chapter-number">1</div>
            <div class="chapter-title">عنوان الفصل</div>
        </div>

        <div class="chapter-content" id="chapterContent">
            <p>هنا يكون نص الفصل. يمكنك إضافة أي نص ترغب فيه هنا.</p>
            <p>استمتع بقراءة الفصل!</p>
        </div>
    </div>

    <footer>
        <div class="navigation-buttons">
            <a href="chapter2.html" id="prev-btn"><i class="fas fa-chevron-right"></i></a>
            <button onclick="decreaseFontSize()"><i class="fas fa-search-minus"></i></button>
            <button onclick="increaseFontSize()"><i class="fas fa-search-plus"></i></button>
            <button onclick="toggleBoldText()"><i class="fas fa-bold"></i></button>
            <button onclick="changeTextColor()"><i class="fas fa-palette"></i></button>
            <button onclick="toggleDarkMode()"><i class="fas fa-moon"></i></button>
            <a href="index.html" id="next-btn"><i class="fas fa-chevron-left"></i></a>
        </div>
    </footer>

    <script src="chapter.js"></script>
</body>
</html>
