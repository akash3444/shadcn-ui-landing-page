'use client';

import React, { useMemo, forwardRef } from 'react';
import { SmokeScene, Smoke as ReactSmoke } from 'react-smoke';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { cn } from "@/lib/utils"
import * as THREE from 'three';

export interface SmokeProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The density of the smoke particles
   * @default 50
   */
  density?: number;

  /**
   * The color of the smoke
   * @default "#ffffff"
   */
  color?: string;

  /**
   * The opacity of the smoke
   * @default 0.5
   */
  opacity?: number;

  /**
   * Whether to enable rotation animation
   * @default true
   */
  enableRotation?: boolean;

  /**
   * The rotation values for the smoke
   * @default [0, 0, 0.1]
   */
  rotation?: [number, number, number];

  /**
   * Whether to enable wind effect
   * @default false
   */
  enableWind?: boolean;

  /**
   * The wind strength
   * @default [0.01, 0.01, 0.01]
   */
  windStrength?: [number, number, number];

  /**
   * Whether to enable turbulence
   * @default false
   */
  enableTurbulence?: boolean;

  /**
   * The turbulence strength
   * @default [0.01, 0.01, 0.01]
   */
  turbulenceStrength?: [number, number, number];

  /**
   * Use simplified scene wrapper (recommended for most cases)
   * @default true
   */
  useSimpleScene?: boolean;
}

export const Smoke = forwardRef<HTMLDivElement, SmokeProps>(({
  className,
  density = 50,
  color = '#ffffff',
  opacity = 0.5,
  enableRotation = true,
  rotation = [0, 0, 0.1],
  enableWind = false,
  windStrength = [0.01, 0.01, 0.01],
  enableTurbulence = false,
  turbulenceStrength = [0.01, 0.01, 0.01],
  useSimpleScene = true,
  ...props
}, ref) => {
  const smokeColor = useMemo(() => new THREE.Color(color), [color]);
  const bgColor = useMemo(() => new THREE.Color('black'), []);

  const smokeProps = useMemo(() => ({
    color: smokeColor,
    density,
    opacity,
    enableRotation,
    rotation,
    enableWind,
    windStrength,
    enableTurbulence,
    turbulenceStrength,
  }), [
    smokeColor,
    density,
    opacity,
    enableRotation,
    rotation,
    enableWind,
    windStrength,
    enableTurbulence,
    turbulenceStrength,
  ]);

  if (useSimpleScene) {
    return (
      <div
        ref={ref}
        className={cn('w-full h-full', className)}
        {...props}
      >
        <SmokeScene
          camera={{ fov: 60, position: [0, 0, 500], far: 6000 }}
          scene={{ background: bgColor }}
          smoke={smokeProps}
          suspenseFallback={null}
          resize={{ scroll: false, debounce: { scroll: 0, resize: 0 } }}
        />
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={cn('w-full h-full', className)}
      {...props}
    >
      <Canvas
        camera={{ fov: 60, position: [0, 0, 500], far: 6000 }}
        scene={{ background: bgColor }}
        resize={{ scroll: false, debounce: { scroll: 0, resize: 0 } }}
      >
        <Suspense fallback={null}>
          <ReactSmoke {...smokeProps} />
        </Suspense>
      </Canvas>
    </div>
  );
});

Smoke.displayName = 'Smoke';

export default Smoke;