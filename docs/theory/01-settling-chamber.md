---
id: settling-chamber
title: "Component 1: Settling Chamber"
sidebar_label: "1. Settling Chamber"
---

import Derivation from '@site/src/components/Derivation';

# Settling Chamber (Component 1)

## Geometry

The settling chamber spans from node 1 to node 2 with a constant 1000×1000 mm square cross-section,
so $A_1 = A_2 = 1\,\text{m}^2$. The area-change term in the pressure coefficient vanishes, reducing
$\alpha_1$ to a pure loss:

$$
\alpha_1 = 1 - \left(\frac{A_1}{A_2}\right)^2 - K_1 = -K_1.
$$

## Loss model

The settling chamber houses a **honeycomb** followed by one or more **screens** in series.
Their pressure drops add:

$$
K_1 = K_\text{hc} + \sum_{j=1}^{n_\text{sc}} K_{\text{sc},j}.
$$

### Honeycomb

The honeycomb straightens the flow and eliminates residual swirl from the upstream corner.
It consists of cells with hydraulic diameter $d_\text{hc}$ and length $L_\text{hc}$.
At the settling-chamber velocity $V_1 = V_\text{ts}/4$ the cell Reynolds number is well
within the laminar regime ($Re_{d_\text{hc}} = V_1 d_\text{hc}/\nu \ll 2300$), so the
Hagen–Poiseuille law applies:

$$
K_\text{hc}
  = \frac{C_\text{hc}}{Re_{d_\text{hc}}} \cdot \frac{L_\text{hc}}{d_\text{hc}}
  = \frac{C_\text{hc}\,\nu\,L_\text{hc}}{V_1\,d_\text{hc}^2}.
$$

The shape factor $C_\text{hc}$ depends on the cell geometry: $C_\text{hc} = 64$ for circular
tubes and $C_\text{hc} \approx 57$ for hexagonal cells. Because $K_\text{hc} \propto 1/V_1$,
the honeycomb resistance decreases with increasing velocity—unlike the quadratic loss law assumed
for most other components.

<Derivation title="Derivation — honeycomb loss coefficient">

Consider laminar, fully developed flow through a straight duct of hydraulic diameter $d_\text{hc}$
and length $L_\text{hc}$. The Darcy–Weisbach equation gives:

$$
\Delta p_\text{hc} = f \frac{L_\text{hc}}{d_\text{hc}}\,q_1,
$$

where the Darcy friction factor for laminar flow is $f = C_\text{hc}/Re_{d_\text{hc}}$
(with $Re_{d_\text{hc}} = V_1 d_\text{hc}/\nu$). Substituting:

$$
\Delta p_\text{hc}
  = \frac{C_\text{hc}}{Re_{d_\text{hc}}}\cdot\frac{L_\text{hc}}{d_\text{hc}}\,q_1
  = \underbrace{\frac{C_\text{hc}\,\nu\,L_\text{hc}}{V_1\,d_\text{hc}^2}}_{K_\text{hc}}\,q_1.
$$

</Derivation>

### Screens

Each screen is described by its wire diameter $d_\text{sc}$ and mesh spacing $M_\text{sc}$.
The open-area ratio (porosity) is:

$$
\beta_\text{sc} = \left(1 - \frac{d_\text{sc}}{M_\text{sc}}\right)^2.
$$

At high wire Reynolds number ($Re_{d_\text{sc}} = V_1 d_\text{sc}/\nu \gg 1$) the pressure loss
is governed by the Borda–Carnot mixing loss in the wake of each wire:

$$
K_\text{sc} = \left(\frac{1 - \beta_\text{sc}}{\beta_\text{sc}}\right)^2.
$$

At the PROTOFLOW settling-chamber conditions ($V_1 \approx 4.5\,\text{m/s}$, typical wire
diameters $d_\text{sc} \approx 0.2$–$0.5\,\text{mm}$) the wire Reynolds number lies in the range
$Re_{d_\text{sc}} \approx 60$–$150$, where viscous effects are not negligible.
In this intermediate regime the formula above over-predicts the loss, and a correction factor
$C_{Re}(Re_{d_\text{sc}})$ must be applied:

$$
K_\text{sc} = C_{Re}(Re_{d_\text{sc}}) \cdot \left(\frac{1 - \beta_\text{sc}}{\beta_\text{sc}}\right)^2,
$$

with $C_{Re} \to 1$ as $Re_{d_\text{sc}} \to \infty$ and $C_{Re} \to 0$ as $Re_{d_\text{sc}} \to 0$.

<Derivation title="Derivation — screen loss coefficient">

Treat the screen as a series of thin obstacles each blocking a fraction $(1 - \beta_\text{sc})$
of the flow area. By continuity, the fluid that passes through the open fraction accelerates
to $V_\text{sc} = V_1/\beta_\text{sc}$. Downstream of the screen the jets spread and mix back
to the undisturbed velocity $V_1$.

The irreversible pressure loss during this sudden-expansion mixing (Borda–Carnot):

$$
\Delta p_\text{sc}
  = \tfrac{1}{2}\rho\left(\frac{V_1}{\beta_\text{sc}} - V_1\right)^{\!2}
  = q_1\left(\frac{1 - \beta_\text{sc}}{\beta_\text{sc}}\right)^{\!2}.
$$

Hence $K_\text{sc} = \left(\dfrac{1-\beta_\text{sc}}{\beta_\text{sc}}\right)^2$.

This derivation assumes that all kinetic energy in the accelerated jets is lost irreversibly,
which is the high-Reynolds-number limit.  At lower $Re_{d_\text{sc}}$ the wake behind each wire
is laminar and more ordered, so less energy is dissipated — hence the correction factor $C_{Re} < 1$.

</Derivation>

## Component parameters

The specific dimensions of the PROTOFLOW honeycomb and screens have yet to be measured
and are to be determined (t.b.d.):

| Parameter | Symbol | Value |
|-----------|--------|-------|
| Honeycomb cell hydraulic diameter | $d_\text{hc}$ | t.b.d. |
| Honeycomb cell length | $L_\text{hc}$ | t.b.d. |
| Number of screens | $n_\text{sc}$ | t.b.d. |
| Screen wire diameter | $d_{\text{sc},j}$ | t.b.d. |
| Screen mesh spacing | $M_{\text{sc},j}$ | t.b.d. |
