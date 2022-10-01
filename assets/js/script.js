const NEWS_API_URL = 'https://newsapi.org/v2/top-headlines?country=id&apiKey=0d63e786c8954ad492ba645bee8f3a36';
const content = document.querySelector('#content');

fetch(NEWS_API_URL)
	.then((res) => res.json())
	.then((res) => {
		let articleContent = '';
		const { articles } = res;
		console.log(articles);

		// articles.slice(0, 10).forEach((article) => {
		// 	articleContent += `
		//   <article>
		//     <img src="${article.urlToImage}" alt="${article.title}" />
		//     <a href="${article.url}">${article.title}</a>
		//     <p>${article.description}</p>
		//   </article>
		//   `;
		// });

		// content.innerHTML = articleContent;
	});
