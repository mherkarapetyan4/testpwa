import React from 'react';
import { Facebook, Instagram, Twitter } from 'react-feather';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { shape, string } from 'prop-types';
import { useFooter } from '@magento/peregrine/lib/talons/Footer/useFooter';

import Logo from '@magento/venia-ui/lib/components/Logo';
// import { mergeClasses } from '../../classify';
// import defaultClasses from './footer.css';
// import { DEFAULT_LINKS, LOREM_IPSUM } from './sampleData';
// import GET_STORE_CONFIG_DATA from '../../queries/getStoreConfigData.graphql';

import { mergeClasses } from '@magento/venia-ui/lib/classify';
import defaultClasses from '@magento/venia-ui/lib/components/Footer/footer.css';
import { DEFAULT_LINKS, LOREM_IPSUM } from "@magento/venia-ui/lib/components/Footer/sampleData";
import GET_STORE_CONFIG_DATA from '@magento/venia-ui/lib/queries/getStoreConfigData.graphql';
import MyComponent from '../MyComponent';

const Footer = props => {
    const { links } = props;
    const classes = mergeClasses(defaultClasses, props.classes);
    const talonProps = useFooter({
        query: GET_STORE_CONFIG_DATA
    });

    const { copyrightText } = talonProps;

    const linkGroups = Array.from(links, ([groupKey, linkProps]) => {
        const linkElements = Array.from(linkProps, ([text, path]) => {
            const itemKey = `text: ${text} path:${path}`;
            const child = path ? (
                <Link className={classes.link} to={path}>
                    <FormattedMessage id={text} />
                </Link>
            ) : (
                <span className={classes.label}>
                    <FormattedMessage id={text} />
                </span>
            );

            return (
                <li key={itemKey} className={classes.linkItem}>
                    {child}
                </li>
            );
        });

        return (
            <ul key={groupKey} className={classes.linkGroup}>
                {linkElements}
            </ul>
        );
    });

    return (
        <footer className={classes.root}>
            <div className={classes.links}>
                <div className={classes.link}>
                    <Link to="/greeting/Liana">
                        <span className={classes.label}>Greeting page</span>
                    </Link>
                </div>
                <div>
                    <MyComponent />
                </div>
                    {linkGroups}
                <div className={classes.callout}>
                    <h3 className={classes.calloutHeading}>
                        <FormattedMessage id={'Follow Us!'} />
                    </h3>
                    <p className={classes.calloutBody}>
                        <FormattedMessage id={LOREM_IPSUM} />
                    </p>
                    <ul className={classes.socialLinks}>
                        <li>
                            <Instagram size={20} />
                        </li>
                        <li>
                            <Facebook size={20} />
                        </li>
                        <li>
                            <Twitter size={20} />
                        </li>
                    </ul>
                </div>
            </div>
            <div className={classes.branding}>
                <ul className={classes.legal}>
                    <li className={classes.terms}>
                        <FormattedMessage id={'Terms of Use'} />
                    </li>
                    <li className={classes.privacy}>
                        <FormattedMessage id={'Privacy Policy'} />
                    </li>
                </ul>
                <p className={classes.copyright}>{copyrightText || null}</p>
                <Link className={classes.logo} to="/">
                    <Logo />
                </Link>
            </div>
        </footer>
    );
};

export default Footer;

Footer.defaultProps = {
    links: DEFAULT_LINKS
};

Footer.propTypes = {
    classes: shape({
        root: string
    })
};
