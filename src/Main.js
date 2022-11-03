import Search from './Search.js'

function Main() {
  const url = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.vimeocdn.com%2Fportrait%2F23106707_640x640&f=1&nofb=1&ipt=41b5cd75e8858cd49f2dfe23256569d889563e47c9e067f313a3f074942cac32&ipo=images'
  
  return (
    <main>
      <img
        className="logo"
        src= {url}
        alt="Google logo"
      />
      <Search />
    </main>
  )
}

export default Main