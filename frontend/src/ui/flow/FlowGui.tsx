import React from 'react';
import ReactFlow, { Background, Controls, ReactFlowProvider } from 'react-flow-renderer';
import {
  useEdgesState,
  useNodesState,
} from 'reactflow';

import { FlowEdge, FlowNode } from '../../domain/flow';

import { createLayout } from './utils/createLayout';

import 'reactflow/dist/style.css';
import styles from './styles.module.scss';

type Props = {
  nodes: FlowNode[];
  edges: FlowEdge[];
}

const FlowGui = ({ edges, nodes }: Props) => {
  const layoutElements = createLayout(nodes, edges);

  const [flowNodes,, onNodesChange] = useNodesState(layoutElements.nodes);
  const [flowEdges,, onEdgesChange] = useEdgesState(layoutElements.edges);

  return (
    <ReactFlowProvider>
      <ReactFlow
        className={styles.wrapper}
        nodes={flowNodes}
        edges={flowEdges}
        onEdgesChange={onEdgesChange}
        onNodesChange={onNodesChange}
        snapToGrid
        fitView
      >
        <Controls />
        <Background variant="dots" gap={36} size={1} />
      </ReactFlow>
    </ReactFlowProvider>

  );
};

export default FlowGui;