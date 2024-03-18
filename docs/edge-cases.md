---
sidebar_position: 7
title: "Edge Cases"
---

# Edge Cases

During the lifecycle of a contest, certain edge cases may arise that require special handling. Below are the procedures for addressing some of the more common edge cases.

## Non-matching API Scores

In instances where the APIs return non-matching results, the score matching confirmation process will not be successful. This, however, is designed to allow retries. Should an initially incorrect score be rectified, the contest can be re-scored by any user.

If the API results remain inconsistent after 3 days, speculations associated with the contest may be voided. This action can be performed by interacting directly with the contract and invoking the `voidSpeculation` function. A voided speculation will enable users to claim an amount equal to their original position, effectively being treated as a "push."

## All Positions on the Same Side

Occasionally, all positions for a given speculation may favor one outcome (e.g., all speculations are on Team A to win). If this situation occurs at the start of a contest, the speculation will be declared invalid, and the speculated amounts can be reclaimed, similar to a push.

## Final Result is 0-0

In the rare case that a contest concludes with a 0-0 result, manual intervention is required. A user with the `SCOREMANAGER_ROLE` must manually score the contest. This protocol is particularly necessary if all three APIs return a 0-0 score, which is highly uncommon. Should soccer be added to the range of sports for contest creation, this rule may need to be revisited due to the higher likelihood of such scores in that sport.

*These are guidelines for handling some of the edge cases you may encounter. If other situations arise that are not covered here, they will be addressed as needed.*