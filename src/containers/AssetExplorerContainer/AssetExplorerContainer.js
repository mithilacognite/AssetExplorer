import React from 'react';
import { AssetSearch, AssetTree, AssetMeta } from '@cognite/gearbox';
import styled from 'styled-components';

const PageContainer = styled.div`
  background-color: #00253a;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const PageBar = styled.div`
  background-color: #00253a;
  width: 80px;
`;

const PageAssets = styled.div`
  width: 35%;
  overflow: auto;
  background-color: #e6ebf3;
`;

const PageSearch = styled.div`
  height: 64px;
  padding: 16px;
  background-color: #c7cdd8;
`;

const PageMeta = styled.div`
  width: 62%
  overflow: auto;
  padding: 10px 0 0 15px;
  background-color:#F0F2F5
`;

class AssetExplorerContainer extends React.Component {
  state = {
    assetCheckedId: null
  };

  handleSearchAssetSelect = data => {
    this.setState({
      assetCheckedId: data.id
    });
  };

  handleAssetSelect = data => {
    this.setState({
      assetCheckedId: data.key
    });
  };

  render() {
    const { assetCheckedId } = this.state;

    return (
      <PageContainer>
        <PageBar />
        <PageAssets>
          <PageSearch>
            <AssetSearch onLiveSearchSelect={this.handleSearchAssetSelect} />
          </PageSearch>
          <AssetTree onSelect={this.handleAssetSelect} />
        </PageAssets>
        <PageMeta>
          {assetCheckedId ? (
            <AssetMeta assetId={assetCheckedId} />
          ) : (
            <p>Please select a node from the list to the left.</p>
          )}
        </PageMeta>
      </PageContainer>
    );
  }
}
export default AssetExplorerContainer;