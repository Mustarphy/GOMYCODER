
const Layout = ({children}) => {
    return(
        <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'row',
      }}
    >
        {children}
    </div>

    );
};

export default Layout 