import WalletConnectButton from './WalletConnectButton.svelte';

export default {
	title: 'Components/WalletConnectButton',
	component: WalletConnectButton,
	argTypes: {
		label: { control: 'text' },
		primary: { control: 'boolean' },
		backgroundColor: { control: 'color' },
		size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
		onClick: { action: 'click' }
	}
};

const Template = ({ onClick, ...args }) => ({
	Component: WalletConnectButton,
	props: args,
	on: {
		click: onClick
	}
});

export const Primary = Template.bind({});
Primary.args = {
	primary: true,
	label: 'Connect'
};

export const Secondary = Template.bind({});
Secondary.args = {
	label: 'Connect'
};

export const Large = Template.bind({});
Large.args = {
	size: 'large',
	label: 'Connect'
};

export const Small = Template.bind({});
Small.args = {
	size: 'small',
	label: 'Connect'
};
