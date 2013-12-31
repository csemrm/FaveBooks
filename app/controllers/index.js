if (OS_IOS) {
	$.navGroupWin.open();
}
if (OS_ANDROID) {
	$.index.open();
}

var myBooks = Alloy.Collections.books;

 

function showBook(event) {
	var selectedBook = event.source;

	var args = {
		title : selectedBook.title,
		author : selectedBook.author
	};
	var bookview = Alloy.createController("bookdetails", args).getView();

	if (OS_IOS) {
		$.navGroupWin.openWindow(bookview);
	}
	if (OS_ANDROID) {
		bookview.open();
	}
}

function addBook() {
	var args = {

	};
	var bookview = Alloy.createController("addbook", args).getView();

	if (OS_IOS) {
		$.navGroupWin.openWindow(bookview);
	}
	if (OS_ANDROID) {
		bookview.open();
	}
}
