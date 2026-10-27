export const posts = [
   {
    id: 'machine-learning-life-sciences',
    title: 'Where machine learning meets the life sciences',
    date: '2026-10-01',
    topic: 'Data science · Digital life sciences',
    paragraphs: [
      'Biological data can be large, varied, and difficult to interpret by eye. Machine learning offers tools for finding patterns in that data, from grouping similar observations to making predictions that can guide further investigation.',
      'A useful result needs more than a strong score. The data, assumptions, and limits of a model matter too, especially when its output could influence decisions about research or people. Good analysis should make those limits visible instead of hiding them behind a prediction.',
      'I’m curious about building practical software at this intersection: tools that help people explore data, understand how a result was produced, and decide what questions are worth asking next.',
    ],
  },
  {
    id: 'iris-classification',
    title: 'A first look at Iris flower classification',
    date: '2026-04-03',
    topic: 'Machine learning · Classification',
    paragraphs: [
      'The Iris dataset is a useful way to get familiar with classification. Each flower is described by four measurements: sepal length, sepal width, petal length, and petal width. The goal is to use those measurements to predict which of three Iris species it belongs to.',
      'Before choosing a model, it helps to explore the measurements. Petal size, for example, can make some species easier to distinguish, while others overlap more. Looking at the data first makes it easier to understand what a model is learning and where its predictions may be uncertain.',
      'A small dataset like this does not represent every challenge in machine learning, but it gives a clear starting point for practicing data exploration, model evaluation, and careful interpretation.',
    ],
  },
  {
    id: 'how-neural-networks-learn',
    title: 'How does a neural network learn?',
    date: '2026-02-07',
    topic: 'Deep learning · Learning notes',
    paragraphs: [
      'A neural network learns by adjusting numbers called weights. At the start, those weights usually produce rough predictions. During training, the network compares a prediction with the expected answer and measures the difference using a loss function.',
      'An optimization method then nudges the weights in a direction that should reduce that loss. Repeating this process across many examples can help the network recognize patterns that generalize beyond the examples it has already seen.',
      'That description is only the outline. I’m interested in digging deeper into what these updates mean, how different choices affect training, and how to tell whether a model has learned something useful rather than simply memorized its data.',
    ],
  },
  
  ]

export function formatPostDate(date: string) {
  return new Date(`${date}T12:00:00`).toLocaleDateString('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  })
}