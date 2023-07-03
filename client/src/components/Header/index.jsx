import './Header.scss';

const Header = () => {
  return (
    <>
      <header>
        <div className='brand'>
          <img src="../../../public/Icon.png" alt="icono" />
          <h1>My Product Site</h1>
        </div>
        <div className='menu'>
          <p>Get started</p>
          <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m4.5 5h12"/><path d="m4.498 10h12"/><path d="m4.5 15h12"/></g></svg>
        </div>
      </header>
    </>
  )
}

export default Header