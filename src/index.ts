import uniqueRandomArray from 'unique-random-array';

const quotes = [
	"It works fine on my computer. Come and see it in action if you don't believe me.",
	'Who did you login as? Are you an administrator?',
	"It's not a bug, it's a feature.",
	"That's weird…",
	"It's never done that before.",
	'It worked yesterday.',
	'How is that possible?',
	'Have you checked your network connection/settings?',
	'You must have entered the wrong data and crashed it.',
	'There is something funky in your data.',
	"I haven't touched that part of the code for weeks!",
	'You must have the wrong library version.',
	'What version of Internet Explorer are you using?',
	"I can't unit test everything!",
	'We will fix that later.',
	"It works, but I didn't write any unit tests.",
	'Somebody must have changed my code.',
	'Did you check for a virus on your system?',
	"Even though it doesn't work, how does it feel?",
	"You can't use that version on your operating system.",
	'Why do you want to do it that way?',
	'Is the [network] cable plugged in?',
	"I'm pretty sure I've already fixed that.",
	'Have you restarted your application server/database server/machine after upgrading?',
	'Which version of JRE/JDK/JVM have you installed?',
	'Have you tried deleting system32?',
	'You must have done something wrong.',
	'It works on my machine.',
	'Did you try turning it off and on again?',
	"That's not a bug; it's an undocumented feature.",
	'It must be a caching issue.',
	'Let me check the logs.',
	"I can't seem to reproduce the error.",
	'Have you cleared your browser cache?',
	'It works in the development environment.',
	"I'll fix it in the next sprint.",
	'We need more time for testing.',
	"It's a problem with the third-party library.",
	'Are you sure you followed the installation steps?',
	'I think the server is down.',
	'It compiles, so it should work.',
	"I'll just rewrite it from scratch.",
	"Let's comment out that line and see what happens.",
	"That's an edge case.",
	"It's just a simple fix.",
	"I didn't write that part of the code.",
	'We need to refactor this.',
	'Can you send me a screenshot?',
	"Let's deploy and see.",
	'It passed all the unit tests.',
	'It worked before I merged the changes.',
	'We might need to upgrade the framework.',
	"It's a hardware issue.",
	"That's outside the scope of this project.",
	"I'll have it fixed by the end of the day.",
	"Maybe it's a permissions issue.",
	"It's probably a null pointer exception.",
	"Let's roll back to the previous version.",
	'I need to check Stack Overflow.',
	"I'll add it to the backlog.",
	"That's not how it's supposed to work.",
	'We need to optimize the algorithm.',
	'The deadline has been moved up?',
	"I'll get back to you on that.",
	"It's working as intended.",
	"I think it's a network latency issue.",
	'We need to write some documentation.',
	'Have you tried updating your drivers?',
	"It's a browser compatibility problem.",
	"That feature isn't supported yet.",
	"It's not a priority right now.",
	'The code is self-explanatory.',
	'We need to schedule a code review.',
	"It's a prototype, not the final product.",
	'Can you reproduce the issue?',
	'It must be an environment variable.',
	"That's an interesting problem.",
	"Let's write a script to automate that.",
	'I think I found the root cause.',
	'We should write unit tests for that.',
	"It's just a placeholder.",
	"I'll need to check with the team lead.",
	"I wasn't aware of that requirement.",
	"It's a legacy system issue.",
	'We need to update our dependencies.',
	"It works, but it's not elegant.",
	'I think we have a memory leak.',
	"I'll need to debug that.",
	"That's an old version.",
	'We need to discuss that in the next meeting.',
	'I was up all night fixing that bug.',
	"It's not in the budget.",
	'I need more coffee.',
	'We should write an API for that.',
	"That's a feature request.",
	'The specifications changed again?',
	'I can code it, but it will take time.',
	"Let's split this task.",
	"It's a data migration issue.",
	"I'll push the changes to GitHub.",
	'We need to increase test coverage.',
	"It's an intermittent issue.",
	'Can you file a bug report?',
	"Let's pair program on this.",
	"I think it's a typo.",
	'We should use version control.',
	"It's just a proof of concept.",
	'I need to read the documentation.',
	"That's above my pay grade.",
	'We should automate the tests.',
	'I need access to that repository.',
	"The code works, but I don't know why.",
	'We should consider scalability.',
	"It's a synchronization problem.",
	'I thought someone else was handling that.',
	'We need to update the UI.',
	"I'll create a branch for that.",
	'I found a workaround.',
	"Let's schedule a stand-up meeting.",
	'We should modularize the code.',
	'I need to resolve this merge conflict.',
	"It's a cross-site scripting issue.",
	"Let's check the error codes.",
	'I think the database is locked.',
	'We need to test this in production.',
	'I forgot to commit my changes.',
	"I'll write a script to fix that.",
	"Let's optimize the database queries.",
	'I need to refactor this codebase.',
	'The API response time is too slow.',
	'We should implement continuous integration.',
	'I think we can improve the user experience.',
	"Let's schedule a sprint planning meeting.",
	'This module needs better documentation.',
	'We should consider microservices architecture.',
	'I found a security vulnerability.',
	"Let's use a different design pattern here.",
	'The build failed due to missing dependencies.',
	'We need to handle exceptions properly.',
	'This function could be more efficient.',
	"I'm setting up a local development environment.",
	'We should write more unit tests.',
	'The code review is scheduled for tomorrow.',
	'I deployed the latest version to staging.',
	"Let's discuss the project roadmap.",
	'We need to adhere to coding standards.',
	"I'm updating the software requirements.",
	"Let's use version control for this project.",
	'I suggest we switch to a different framework.',
	'The application needs to be scalable.',
	'We should automate the deployment process.',
	"I'm working on the frontend components.",
	'The backend services are up and running.',
	"Let's integrate a third-party API.",
	'I created a new branch for this feature.',
	'We need to fix the merge conflicts.',
	"I'm configuring the continuous deployment pipeline.",
	"Let's perform load testing on the server.",
	'We should implement caching mechanisms.',
	'The UI needs to be more responsive.',
	"I'm optimizing the image assets.",
	'We need to update the SSL certificates.',
	"Let's schedule a code freeze before release.",
	'The logging system needs improvement.',
	"I'm setting up user authentication.",
	'We should consider using containers.',
	'The data models require normalization.',
	"Let's prioritize the bug fixes.",
	"I'm analyzing the performance metrics.",
	'We need to ensure data integrity.',
	"Let's implement role-based access control.",
	'The configuration files need updating.',
	"I'm working on the API documentation.",
	'We should use encryption for sensitive data.',
	"Let's migrate the database to the cloud.",
	'The test suite needs expansion.',
	"I'm addressing the technical debt.",
	'We need to improve code readability.',
	"Let's set up a monitoring dashboard.",
	'The build scripts need optimization.',
	"I'm configuring the network settings.",
	'We should conduct a security audit.',
	"Let's use feature flags for deployment.",
	'The error handling needs refinement.',
	"I'm working on cross-platform compatibility.",
	'We need to update the license agreements.',
	"Let's adopt a new project management tool.",
	'The algorithm can be optimized further.',
	"I'm implementing real-time data syncing.",
	'We should consider user feedback.',
	"Let's conduct a usability test.",
	'The dependency injection needs adjustment.',
	"I'm integrating machine learning capabilities.",
	'We need to ensure compliance with regulations.',
	"Let's revisit the system architecture.",
	'The localization files need updating.',
	"I'm setting up automated backups.",
	'We should improve the search functionality.',
	"Let's enhance the notification system.",
	'The middleware requires configuration.',
	"I'm working on the analytics integration.",
	'We need to address the latency issues.',
	"Let's implement serverless functions.",
	'The routing logic needs correction.',
	"I'm updating the code to support new features.",
	'We should optimize the memory usage.',
	"Let's improve the logging granularity.",
	'The testing environment needs setup.',
	"I'm configuring the load balancer.",
	'We need to document the API endpoints.',
	"Let's streamline the build process.",
	'The user interface needs redesigning.',
	"I'm working on data serialization.",
	'We should update the SDK versions.',
	"Let's plan for disaster recovery.",
	'The compliance checks need to be automated.',
	"I'm enhancing the data visualization.",
	'We need to address the scalability concerns.',
	"Let's implement multi-factor authentication.",
	'The session management requires attention.',
	"I'm working on the payment gateway integration.",
	'We should optimize the search algorithms.',
	"Let's set up code linting tools.",
	'The cache invalidation needs fixing.',
	"I'm updating the environment variables.",
	'We need to improve the build pipeline.',
	"Let's focus on improving code modularity.",
];

const randomQuote = uniqueRandomArray(quotes);

const getHTML = (quote: string) => `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, initial-scale=1.0">
  <title>Sh!t Developers Say</title>
  <meta property="og:title"
        content="Sh!t Developers Say" />
  <meta property="og:description"
        content="${quote}" />
  <meta property="og:url"
        content="https://devquotes.lol" />
  <style>
    body,
    body {
      margin: 0;
      padding: 0;
      width: 100vw;
      height: 100vh;
    }

    main {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    h1 {
      text-align: center;
      margin: 0;
    }
  </style>
</head>

<body>
  <main>
    <h1>${quote}</h1>
  </main>
</body>

</html>`;

export default {
	async fetch(request): Promise<Response> {
		const url = new URL(request.url);
		const pathQuote = url.pathname.split('/').at(1);
		let quoteNumber: number | undefined = Number(pathQuote);
		if (Number.isNaN(quoteNumber)) {
			quoteNumber = undefined;
		}

		if (typeof quoteNumber === 'number' && quoteNumber > quotes.length) {
			return new Response('Quote not found', { status: 404 });
		}

		const quote = (quoteNumber ? quotes[quoteNumber] : randomQuote()) ?? '¯\\_(ツ)_/¯';
		const contentType = request.headers.get('content-type');

		if (contentType === 'application/json') {
			return new Response(JSON.stringify({ quote }, null, 2), {
				headers: { 'content-type': 'application/json' },
				status: 200,
			});
		}

		return new Response(getHTML(quote), {
			status: 200,
			headers: {
				'content-type': 'text/html',
			},
		});
	},
} satisfies ExportedHandler<Env>;
