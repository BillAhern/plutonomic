import './App.css';
import logo from '/logo.svg';
import FileConvert from './components/fileConvert.tsx';
import FilterUnique from './components/filterUnique.tsx';

function App() {
	return (
		<>
			<div className='header'>
				<img className='logo' src={logo} alt='plutonomic logo' />
				<h1 className='title'>Plutonomic</h1>
				<p>plutonomic (adj.) "of or pertaining to the science or study of wealth or riches".</p>
				<div className='filter-select'>
					<FileConvert />
				</div>
			</div>
			<div className='data-container'>
				<div className='list-unique auto item'>
					<FilterUnique />
				</div>
				<div className='daily-spend auto item'>
					Daily Spend <br />
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo sed egestas egestas
					fringilla phasellus faucibus scelerisque eleifend donec. Scelerisque fermentum dui faucibus in ornare quam. Odio tempor orci dapibus ultrices in iaculis nunc
					sed augue. Sem et tortor consequat id porta nibh venenatis cras. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis. Nunc pulvinar sapien et
					ligula ullamcorper malesuada. Vitae turpis massa sed elementum tempus egestas sed sed risus. Mauris commodo quis imperdiet massa. Nulla facilisi nullam vehicula
					ipsum a arcu cursus vitae. Rhoncus est pellentesque elit ullamcorper. Eu scelerisque felis imperdiet proin fermentum leo. Adipiscing enim eu turpis egestas
					pretium aenean pharetra magna ac. Blandit turpis cursus in hac habitasse platea dictumst. Ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet.
					Tellus orci ac auctor augue mauris augue neque gravida. Dui sapien eget mi proin sed libero enim. Maecenas ultricies mi eget mauris pharetra et. Sit amet
					venenatis urna cursus eget nunc scelerisque. Gravida quis blandit turpis cursus in hac habitasse. Dolor purus non enim praesent elementum facilisis leo vel. Nec
					feugiat nisl pretium fusce id velit ut tortor pretium. Duis tristique sollicitudin nibh sit. Sodales ut eu sem integer. Ullamcorper velit sed ullamcorper morbi
					tincidunt ornare massa. Blandit massa enim nec dui nunc mattis. At tempor commodo ullamcorper a lacus.
				</div>
				<div className='weekly-spend auto item'>
					Weekly Spend <br />
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo sed egestas egestas
					fringilla phasellus faucibus scelerisque eleifend donec. Scelerisque fermentum dui faucibus in ornare quam. Odio tempor orci dapibus ultrices in iaculis nunc
					sed augue. Sem et tortor consequat id porta nibh venenatis cras. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis. Nunc pulvinar sapien et
					ligula ullamcorper malesuada. Vitae turpis massa sed elementum tempus egestas sed sed risus. Mauris commodo quis imperdiet massa. Nulla facilisi nullam vehicula
					ipsum a arcu cursus vitae. Rhoncus est pellentesque elit ullamcorper. Eu scelerisque felis imperdiet proin fermentum leo. Adipiscing enim eu turpis egestas
					pretium aenean pharetra magna ac. Blandit turpis cursus in hac habitasse platea dictumst. Ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet.
					Tellus orci ac auctor augue mauris augue neque gravida. Dui sapien eget mi proin sed libero enim. Maecenas ultricies mi eget mauris pharetra et. Sit amet
					venenatis urna cursus eget nunc scelerisque. Gravida quis blandit turpis cursus in hac habitasse. Dolor purus non enim praesent elementum facilisis leo vel. Nec
					feugiat nisl pretium fusce id velit ut tortor pretium. Duis tristique sollicitudin nibh sit. Sodales ut eu sem integer. Ullamcorper velit sed ullamcorper morbi
					tincidunt ornare massa. Blandit massa enim nec dui nunc mattis. At tempor commodo ullamcorper a lacus.
				</div>
			</div>
		</>
	);
}

export default App;
