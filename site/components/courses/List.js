import * as React from 'react';
import { Row, Tag } from 'antd';

/**
 * Components
 */

import Item from './Item';
import Container from './../common/Container';

const { CheckableTag } = Tag;

/*!
 * Expos
 */

class List extends React.Component<{ name: string; description: string; items: ICourse[]; tagsCloud?: any[] }> {
  state: {
    selectedTags: string[];
  } = {
    selectedTags: [],
  };

  constructor(props) {
    super(props);
  }

  handleChange = (tag: string, checked: boolean) => {
    const { selectedTags } = this.state;

    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter(t => t !== tag);

    this.setState({ selectedTags: nextSelectedTags });
  }

  render() {
    const {
      name = '', 
      description = '',
      items = [],
      tagsCloud = [],
    } = this.props;
    const { selectedTags } = this.state;

    let currentItems = items;

    if (!!selectedTags.length) {
      currentItems = items.filter(({ tags }) => selectedTags.includes(tags));
    }

    return (
      <Container>
        <section className="courses">
          <header className="courses__header">
            <h2 className="courses__title">{name}</h2>
            <p className="courses__description">{description}</p>
            <div className="tags-cloud">
              {tagsCloud.map(({ name, slug }, index) => (
                <CheckableTag
                  key={index}
                  className="tags-cloud__item"
                  checked={selectedTags.includes(slug)}
                  onChange={checked => this.handleChange(slug, checked)}
                >
                  {name}
                </CheckableTag>
              ))}
            </div>
          </header>

          <Row>
            {currentItems.map((item, index) => <Item key={index} {...item} />)}
          </Row>
        </section>
      </Container>
    );
  }
}

export default List;
