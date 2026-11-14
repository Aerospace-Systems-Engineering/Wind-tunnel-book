---
id: index
title: Wind Tunnel Fundamentals
sidebar_label: Wind Tunnel Fundamentals
slug: /fundamentals
---

import Quiz from '@site/src/components/Quiz';

# Wind Tunnel Fundamentals

This chapter introduces the physical principles that underpin wind tunnels. Understanding these concepts will help you in setting up and interpreting your measurements.

## Flow similarity

Flows do not behave identically under all conditions. Their behavior depends on factors such as the flow speed, the size and shape of the object, and the fluid's properties. In the context of wind tunnel experiments, *flow similarity* means arranging conditions so that the flow in the tunnel reproduces the characteristic behavior of the corresponding real flow. Pursuing this similarity is a central part of wind-tunnel testing: a test is useful only when its results can be related reliably to the system being designed.

The motion of a fluid with density $\rho$ [kg/m³], dynamic viscosity $\mu$ [Pa·s], thermal conductivity $k$ [W/(m·K)], and specific heat at constant pressure $c_p$ [J/(kg·K)] is governed by three balance laws: conservation of mass (continuity), momentum, and energy:

$$
\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \mathbf{u}) = 0,
$$

$$
\rho\left(\frac{\partial \mathbf{u}}{\partial t} + \mathbf{u}\cdot\nabla\mathbf{u}\right) = -\nabla p + \mu\nabla^2\mathbf{u},
$$

$$
\rho c_p \left(\frac{\partial T}{\partial t} + \mathbf{u} \cdot \nabla T\right) = \frac{Dp}{Dt} + \nabla \cdot (k \nabla T) + \Phi,
$$

where $\mathbf{u}$ [m/s] is velocity, $p$ [Pa] pressure, $T$ [K] temperature, and $\Phi$ [W/m³] the viscous dissipation function. Body forces such as gravity are small relative to pressure and viscous forces in ordinary aerodynamics and are omitted. These three equations involve four unknown fields ($\mathbf{u}$, $p$, $\rho$, and $T$), and so require a fourth relation to be determinate. For an ideal gas this is the equation of state

$$
p = \rho R T,
$$

where $R$ is the specific gas constant, which closes the system.

To identify the conditions under which two flows behave alike, choose a reference length $L$, flow speed $U$, density $\rho_0$, and temperature $T_0$. Scale the thermodynamic pressure by $p_0 = \rho_0 R T_0$ and define dimensionless variables marked by asterisks. After substitution, the dimensionless forms of continuity, momentum, energy, and the equation of state are

$$
\frac{\partial \rho^*}{\partial t^*} + \nabla^* \cdot (\rho^* \mathbf{u}^*) = 0,
$$

$$
\rho^*\left(\frac{\partial \mathbf{u}^*}{\partial t^*} + \mathbf{u}^*\cdot\nabla^*\mathbf{u}^*\right) = -\frac{1}{\gamma\, \mathrm{Ma}^2}\,\nabla^* p^* + \frac{1}{\mathrm{Re}}\,\nabla^{*2}\mathbf{u}^*,
$$

$$
\rho^*\left(\frac{\partial T^*}{\partial t^*} + \mathbf{u}^* \cdot \nabla^* T^*\right) = \frac{\gamma-1}{\gamma}\frac{D^* p^*}{D t^*} + \frac{1}{\mathrm{Re}\,\mathrm{Pr}}\,\nabla^{*2} T^* + \frac{(\gamma-1)\,\mathrm{Ma}^2}{\mathrm{Re}}\,\Phi^*,
$$

$$
p^* = \rho^* T^*,
$$

which reveals that the flow behavior is governed by four dimensionless groups: the Reynolds number $\mathrm{Re}$, the Mach number $\mathrm{Ma}$, the ratio of specific heats $\gamma$, and the Prandtl number $\mathrm{Pr}$.

### Reynolds number

The Reynolds number,

$$
\mathrm{Re} = \frac{\rho_0 U L}{\mu} = \frac{UL}{\nu},
$$

where $\nu = \mu/\rho_0$ is the kinematic viscosity, is the ratio of inertial to viscous forces. At low $\mathrm{Re}$ viscosity dominates and the flow is laminar; at high $\mathrm{Re}$ inertial effects prevail and the flow tends toward turbulence. For two geometrically similar flows to share the same dimensionless velocity field, their Reynolds numbers must match. The appropriate length scale $L$ is a characteristic dimension of the geometry: for flow around a body such as an airfoil, this is typically the chord $c$.

### Mach number

The Mach number,

$$
\mathrm{Ma} = \frac{U}{a_0}, \qquad a_0 = \sqrt{\gamma R T_0},
$$

where $a_0$ is the isentropic speed of sound, governs the importance of compressibility. The $1/(\gamma\, \mathrm{Ma}^2)$ prefactor in the momentum equation makes this precise: as $\mathrm{Ma} \to 0$ the pressure term becomes infinitely stiff, enforcing $\nabla^* \cdot \mathbf{u}^* = 0$, the incompressible regime. The energy equation then decouples from momentum and density reduces to a constant. As $\mathrm{Ma}$ increases past roughly 0.3, density variations become significant and the full compressible system must be considered.

### Ratio of specific heats and Prandtl number

The remaining two dimensionless groups, $\gamma$ and $\mathrm{Pr}$, are material properties of the working fluid rather than flow conditions. The ratio of specific heats $\gamma = c_p/c_v \approx 1.4$ for air, which consists predominantly of diatomic molecules (N$_2$ and O$_2$). The Prandtl number,

$$
\mathrm{Pr} = \frac{\mu c_p}{k} \approx 0.71,
$$

compares the rates of momentum and thermal diffusion; it too is nearly independent of temperature and pressure for air. Because both $\gamma$ and $\mathrm{Pr}$ are fixed once the working fluid is chosen, they do not constitute independent matching requirements for experiments conducted in air. The two parameters that must be matched between the wind-tunnel model and its full-scale counterpart are therefore $\mathrm{Re}$ and $\mathrm{Ma}$. A third, often implicit, requirement is geometric similarity: the dimensionless shape of the flow domain (including model geometry, surface finish, and orientation) must match between the tunnel and the full-scale application.

Matching $\mathrm{Re}$ and $\mathrm{Ma}$ simultaneously between a wind-tunnel model and its full-scale counterpart is rarely straightforward, but several levers are available. Model scale is the most direct: scaling up a model increases $\mathrm{Re} \propto UL/\nu$ at fixed speed, allowing moderate tunnel velocities to reach realistic Reynolds numbers. Flow speed raises both $\mathrm{Re}$ and $\mathrm{Ma}$ together, which creates a conflict when one must be held fixed while the other is adjusted. Fluid temperature provides a subtler lever: because kinematic viscosity $\nu$ decreases with temperature, cooling the fluid raises $\mathrm{Re}$ without a proportional change in $\mathrm{Ma}$, provided the tunnel speed is adjusted accordingly. Pressurization increases fluid density and thereby $\mathrm{Re} = \rho U L/\mu$ without affecting $\mathrm{Ma}$, since the speed of sound is independent of pressure for an ideal gas. Cryogenic tunnels combine pressurization and very low temperature to achieve extremely high Reynolds numbers at moderate speeds, and are used for full-scale aircraft simulation. In practice, full simultaneous similarity is often unachievable, and experimenters choose which parameters to match based on which physical effects dominate the problem at hand.

## Types of wind tunnels

Wind tunnels come in many forms, tailored to the speed range, budget, and experimental goals they must serve. Three classification axes structure most design choices: the speed regime, the circuit type, and the test-section type.

### Speed regime

The speed of the flow in the test section determines which physical effects dominate and which equations must be solved. The standard classification follows the Mach number: *low-speed* tunnels ($\mathrm{Ma} \lesssim 0.3$) operate in the incompressible regime, where density variations are negligible; *high-speed subsonic* tunnels ($0.3 \lesssim \mathrm{Ma} \lesssim 0.8$) require compressibility corrections; *transonic* tunnels ($\mathrm{Ma} \approx 1$) encounter mixed subsonic–supersonic flow and shock waves; *supersonic* ($\mathrm{Ma} > 1$) and *hypersonic* tunnels ($\mathrm{Ma} > 5$) address progressively more extreme conditions in which aerodynamic heating becomes a dominant concern.

The choice of speed regime has far-reaching consequences for design and cost. Low-speed incompressible tunnels are by far the simplest and least expensive: without compressibility effects there is no need for convergent–divergent nozzles, pressurized circuits, or high-strength test sections, and modest fans and motors suffice. Power consumption and structural demands rise steeply with Mach number, and high-speed facilities require elaborate provisions for managing shock loads and acoustic resonance.

### Circuit type

A wind tunnel either recirculates its working air continuously or draws it fresh from the surroundings after every pass. In a *closed-circuit* (return-circuit or Göttingen-type) tunnel, the air travels in a continuous loop: test section → diffuser → fan → settling chamber → contraction → test section. In an *open-circuit* (Eiffel-type) tunnel, the fan draws air from the room through an inlet, accelerates it through the test section, and exhausts it back into the room.

The two arrangements differ in several practically important respects. Closed-circuit tunnels retain the kinetic energy of the flow from one pass to the next, making them energy-efficient; their enclosed fan section is also significantly quieter. Because the same air recirculates continuously, however, viscous dissipation and fan work heat the air over time, requiring thermal management for extended runs. Open-circuit tunnels avoid this heating issue and are simpler and less expensive to construct, but they consume more energy and expose the laboratory to greater noise levels. Their flow quality is also more sensitive to room conditions such as ambient drafts or open doors.

### Test-section type

The test section itself can be either *closed* (bounded on all sides by solid walls) or *open* (a free jet exhausting into an enclosed plenum). In a closed test section the model is fully surrounded by solid walls. In an open test section the nozzle exit forms a free jet and no walls constrain the flow laterally.

Each arrangement carries distinct trade-offs. Closed test sections provide good flow uniformity and are less sensitive to downstream disturbances, but the walls constrain the flow around any model placed inside. For large models this produces a *blockage effect*: the walls force the flow to accelerate around the model more than it would in free air, requiring correction. Open test sections eliminate wall-proximity effects and allow easy model access, but are more susceptible to flow unsteadiness and require an enclosed plenum to contain the free jet.

## Flow quality

A wind tunnel is useful only when the flow in the test section faithfully represents the idealized free-stream conditions assumed in the analysis. Deviations from a uniform, steady, axially directed flow introduce systematic errors in measured forces, pressures, and wake characteristics. Three quantities are commonly used to characterise flow quality: velocity uniformity, turbulence intensity, and blockage ratio [[Barlow et al., 1999](/references#barlow1999)].

### Velocity uniformity

Velocity uniformity describes how closely the mean flow speed matches its nominal value across the cross-section of the test section. Spatial non-uniformity causes different parts of a model to experience different flow conditions, introducing systematic errors that cannot be corrected without a full map of the velocity field. Uniformity is quantified by surveying the flow on a grid of points and expressing the result as the maximum deviation from the cross-sectional mean. The *usable core* of the test section is defined as the region where this deviation remains below a specified threshold and where proximity to the wall boundary layers is negligible.

### Turbulence intensity

Superimposed on the mean flow are small-scale velocity fluctuations. The *turbulence intensity* is the ratio of the root-mean-square velocity fluctuation to the mean free-stream speed. Elevated turbulence intensity has two principal consequences for experiments. First, it promotes earlier boundary-layer transition on a model's surface: the transition Reynolds number decreases as turbulence intensity increases, shifting the laminar-to-turbulent boundary upstream and altering skin-friction and separation behavior. Second, it raises the unsteady loading on the model, increasing the noise floor of force and pressure measurements.

### Blockage

A model placed in a closed test section displaces part of the flow cross-section, forcing the remaining flow to accelerate around it more than it would in free air. This *blockage effect* produces an artificially elevated velocity around the model and a corresponding reduction in static pressure, both of which bias measured aerodynamic forces upward relative to free-flight values. The magnitude scales with the *blockage ratio*, the ratio of the model's frontal area to the cross-sectional area of the test section. Standard blockage correction methods are well established.

## Aerodynamic forces

When a body is immersed in a flow, the surrounding fluid exerts a net force on it through two mechanisms: the pressure distribution over the body surface and the tangential viscous shear stresses. For an aerodynamic body such as an airfoil, it is natural to decompose this resultant force into two components defined relative to the free-stream velocity $V_\infty$.

![Test section schematic](/img/test_section.svg)

As illustrated above, the *lift* $L$ acts perpendicular to $V_\infty$ and the *drag* $D$ acts parallel to it. In a closed test section, the model is usually mounted on a sting attached to one of the walls. The sting transmits the aerodynamic loads to an internal balance or load cell that resolves them into lift and drag components.

The raw forces $L$ and $D$ depend on the size of the model, the flow speed, and the air density, none of which are intrinsic to the aerodynamics of the shape. To obtain quantities that characterise the shape alone, independent of these conditions, the forces are non-dimensionalised by the *dynamic pressure* $q_\infty = \tfrac{1}{2}\rho V_\infty^2$ and a reference area $A$:

$$
C_L = \frac{L}{q_\infty A}, \qquad C_D = \frac{D}{q_\infty A}.
$$

The lift coefficient $C_L$ and drag coefficient $C_D$ depend only on the shape of the body, its orientation relative to the flow (the angle of attack), and the Reynolds number $\mathrm{Re}$ [[Anderson, 2017](/references#anderson2017)]. The dynamic pressure can be measured directly as the difference between total (stagnation) and static pressure, making it the primary quantity from which $V_\infty$ is inferred in a wind tunnel.