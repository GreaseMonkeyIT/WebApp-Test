import React from 'react';
import styled from 'styled-components';

const BufferWrapper = styled.div`
  height: 150px;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DropdownWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const Buffer = () => (
  <BufferWrapper>
    <DropdownWrapper>
      <div className="form-group">
        <select className="form-control">
          <option value="">Furniture</option>
          <option value="sofas">Sofas</option>
          <option value="tables">Tables</option>
          <option value="chairs">Chairs</option>
        </select>
      </div>
      <div className="form-group">
        <select className="form-control">
          <option value="">Steel Equipment</option>
          <option value="kitchen">Kitchen</option>
          <option value="outdoor">Outdoor</option>
        </select>
      </div>
      <div className="form-group">
        <select className="form-control">
          <option value="">Plaster of Paris Works</option>
          <option value="ceiling">Ceiling</option>
          <option value="walls">Walls</option>
        </select>
      </div>
      <div className="form-group">
        <select className="form-control">
          <option value="">Decor</option>
          <option value="lighting">Lighting</option>
          <option value="accessories">Accessories</option>
        </select>
      </div>
    </DropdownWrapper>
  </BufferWrapper>
);

export default Buffer;
