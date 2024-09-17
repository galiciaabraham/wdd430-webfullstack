const app = document.getElementById('app');

function Header() {
    return (<h1>This is an H1 element created with a component</h1>)
}

function HomePage() {
    return(<div>
        <Header />
    </div>
    );
}

const root = ReactDOM.createRoot(app);
root.render (<HomePage />);

