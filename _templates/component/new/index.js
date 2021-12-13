module.exports = {
  prompt: ({ prompter, args: { path } }) => {
    if (path) return Promise.resolve({ path })

    const message = 'Where should we put this component (src/components)?'
    return prompter
      .prompt({ type: 'input', name: 'path', message })
      .then(({ path: newPath }) => {
        return { path: newPath || 'src/components' }
      })
  },
}
