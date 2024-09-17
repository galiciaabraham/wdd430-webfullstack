const app = document.getElementById('app');

function Header(props) {
    return (<h1>{props.title}</h1>
    )
}

function HomePage() {
    const names = ["John Doe", "Mark Mcnugget", "Josh Syrup"];

    return(<div>
        <Header title="React" />
        <ul>
            {names.map((name) => (
                <li key={name}>{name}</li>
            ))}
        </ul>
    </div>
    );
}

const root = ReactDOM.createRoot(app);
root.render (<HomePage />);

