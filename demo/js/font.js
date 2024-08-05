
		document.addEventListener('DOMContentLoaded', function() {
		const toggleButton = document.getElementById('toggleContent');
		const contentText = document.getElementById('contentText');
		let currentIndex = 0;
		const contents = [
		    "这是第一段内容。",
		    "这是第二段内容。",
		    "这是第三段内容。"
		];
		
		function toggleContent() {
		    contentText.textContent = contents[currentIndex];
		    currentIndex = (currentIndex + 1) % contents.length;
		}
		
		toggleButton.addEventListener('click', function() {
		    toggleContent();
		});