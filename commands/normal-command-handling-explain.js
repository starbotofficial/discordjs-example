// This is what fs'll export.
// Warning: This will not work for events (as reaction collectors).
module.exports = {
  // First element: Name AND Trigger of your command.
	name: 'example-of-command-hold',
  // Seconnd element: Description of your command.
	description: 'This is one example of command hold.',
  // Third and final element: The code of your command
	execute(message, args) {
		message.channel.send('Handling commands works correctly!');
	},
};
